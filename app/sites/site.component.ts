import { Component, Input, OnDestroy, OnInit } from 'angular2/core';
import { CanDeactivate, ComponentInstruction, RouteParams, Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { ModalService, ToastService } from '../blocks/blocks';
import { Site, SiteService } from '../sites/site.service';

@Component({
  selector: 'track-site',
  templateUrl: 'app/sites/site.component.html',
  styles: ['.mdl-textfield__label {top: 0;}'],
  directives: [ROUTER_DIRECTIVES]
})
export class SiteComponent implements CanDeactivate, OnDestroy, OnInit {
  private _dbResetSubscription: Subscription;

  @Input() site: Site;
  editSite: Site = <Site>{};

  constructor(
    private _siteService: SiteService,
    //private _entityService: EntityService,
    private _modalService: ModalService,
    private _routeParams: RouteParams,
    private _router: Router,
    private _toastService: ToastService) { }

  cancel(showToast = true) {
    //this.editSite = this._entityService.clone(this.site);
    if (showToast) {
      this._toastService.activate(`Cancelled changes to ${this.site.name}`);
    }
  }

  delete() {
    let msg = `Do you want to delete ${this.site.name}?`;
    this._modalService.activate(msg).then(responseOK => {
      if (responseOK) {
        this.cancel(false);
        this._siteService.deleteSite(this.site)
          .subscribe(() => {
            this._toastService.activate(`Deleted ${this.site.name}`);
            this._gotoSites();
          });
      }
    });
  }

  isAddMode() {
    let id = +this._routeParams.get('id');
    return isNaN(id);
  }

  ngOnDestroy() {
    this._dbResetSubscription.unsubscribe();
  }

  ngOnInit() {
    componentHandler.upgradeDom();
    this._getSite();
    this._dbResetSubscription = this._siteService.onDbReset
      .subscribe(() => this._getSite());
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
    return !this.site ||
      !this._isDirty() ||
      this._modalService.activate();
  }

  save() {
      let site = this.site;// = this._entityService.merge(this.site, this.editSite);
    if (site.id == null) {
      this._siteService.addSite(site)
        .subscribe(char => {
          this._setEditSite(char);
          this._toastService.activate(`Successfully added ${char.name}`);
          this._gotoSites();
        });
      return;
    }
    this._siteService.updateSite(site)
      .subscribe(() => this._toastService.activate(`Successfully saved ${site.name}`));
  }

  private _getSite() {
    let id = +this._routeParams.get('id');
    if (id === 0) return;
    if (this.isAddMode()) {
      this.site = <Site>{ name: '', side: 'dark' };
      //this.editSite = this._entityService.clone(this.site);
      return;
    }
    this._siteService.getSite(id)
      .subscribe(site => this._setEditSite(site));
  }

  private _gotoSites() {
    let id = this.site ? this.site.id : null;
    let route = ['Sites', { id: id }];
    this._router.navigate(route);
  }

  private _handleServiceError(op: string, err: any) {
    console.error(`${op} error: ${err.message || err}`);
  }

  private _isDirty() {
    //return this._entityService.propertiesDiffer(this.site, this.editSite);
  }

  private _setEditSite(site: Site) {
    if (site) {
      this.site = site;
      //this.editSite = this._entityService.clone(this.site);
    } else {
      this._gotoSites();
    }
  }
}
