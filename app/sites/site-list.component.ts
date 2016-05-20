import { Component, OnDestroy, OnInit, ViewChild } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Observable, Subscription } from 'rxjs/Rx';

import { Site, SiteService } from './site.service';
import { SortSitesPipe } from './sort-sites.pipe';
import { FilterService, FilterTextComponent } from '../blocks/blocks';

@Component({
  selector: 'track-sites',
  templateUrl: './app/sites/site-list.component.html',
  directives: [FilterTextComponent, ROUTER_DIRECTIVES],
  styleUrls: ['./app/sites/site-list.component.css'],
  pipes: [SortSitesPipe],
  providers: [FilterService]
})
export class SiteListComponent implements OnDestroy, OnInit {
  private _dbResetSubscription: Subscription;

  sites: Site[];
  filteredSites = this.sites;
  @ViewChild(FilterTextComponent) filterComponent: FilterTextComponent;

  constructor(private _siteService: SiteService,
    private _filterService: FilterService) { }

  filterChanged(searchText: string) {
      this.filteredSites = this._filterService.filter(searchText, ['name', 'location', 'stage', 'description'], this.sites);
  }

  getSites() {
    this.sites = [];

    this._siteService.getSites()
      .subscribe(sites => {
        this.sites = this.filteredSites = sites;
        this.filterComponent.clear();
      });
  }

  ngOnDestroy() {
    this._dbResetSubscription.unsubscribe();
  }

  ngOnInit() {
    componentHandler.upgradeDom();
    this.getSites();
    this._dbResetSubscription = this._siteService.onDbReset
      .subscribe(() => this.getSites());
  }
}
