System.register(['angular2/core', 'angular2/router', '../blocks/blocks', '../sites/site.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, blocks_1, site_service_1;
    var SiteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            },
            function (site_service_1_1) {
                site_service_1 = site_service_1_1;
            }],
        execute: function() {
            SiteComponent = (function () {
                function SiteComponent(_siteService, 
                    //private _entityService: EntityService,
                    _modalService, _routeParams, _router, _toastService) {
                    this._siteService = _siteService;
                    this._modalService = _modalService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._toastService = _toastService;
                    this.editSite = {};
                }
                SiteComponent.prototype.cancel = function (showToast) {
                    if (showToast === void 0) { showToast = true; }
                    //this.editSite = this._entityService.clone(this.site);
                    if (showToast) {
                        this._toastService.activate("Cancelled changes to " + this.site.name);
                    }
                };
                SiteComponent.prototype.delete = function () {
                    var _this = this;
                    var msg = "Do you want to delete " + this.site.name + "?";
                    this._modalService.activate(msg).then(function (responseOK) {
                        if (responseOK) {
                            _this.cancel(false);
                            _this._siteService.deleteSite(_this.site)
                                .subscribe(function () {
                                _this._toastService.activate("Deleted " + _this.site.name);
                                _this._gotoSites();
                            });
                        }
                    });
                };
                SiteComponent.prototype.isAddMode = function () {
                    var id = +this._routeParams.get('id');
                    return isNaN(id);
                };
                SiteComponent.prototype.ngOnDestroy = function () {
                    this._dbResetSubscription.unsubscribe();
                };
                SiteComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    componentHandler.upgradeDom();
                    this._getSite();
                    this._dbResetSubscription = this._siteService.onDbReset
                        .subscribe(function () { return _this._getSite(); });
                };
                SiteComponent.prototype.routerCanDeactivate = function (next, prev) {
                    return !this.site ||
                        !this._isDirty() ||
                        this._modalService.activate();
                };
                SiteComponent.prototype.save = function () {
                    var _this = this;
                    var site = this.site; // = this._entityService.merge(this.site, this.editSite);
                    if (site.id == null) {
                        this._siteService.addSite(site)
                            .subscribe(function (char) {
                            _this._setEditSite(char);
                            _this._toastService.activate("Successfully added " + char.name);
                            _this._gotoSites();
                        });
                        return;
                    }
                    this._siteService.updateSite(site)
                        .subscribe(function () { return _this._toastService.activate("Successfully saved " + site.name); });
                };
                SiteComponent.prototype._getSite = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    if (id === 0)
                        return;
                    if (this.isAddMode()) {
                        this.site = { name: '', side: 'dark' };
                        //this.editSite = this._entityService.clone(this.site);
                        return;
                    }
                    this._siteService.getSite(id)
                        .subscribe(function (site) { return _this._setEditSite(site); });
                };
                SiteComponent.prototype._gotoSites = function () {
                    var id = this.site ? this.site.id : null;
                    var route = ['Sites', { id: id }];
                    this._router.navigate(route);
                };
                SiteComponent.prototype._handleServiceError = function (op, err) {
                    console.error(op + " error: " + (err.message || err));
                };
                SiteComponent.prototype._isDirty = function () {
                    //return this._entityService.propertiesDiffer(this.site, this.editSite);
                };
                SiteComponent.prototype._setEditSite = function (site) {
                    if (site) {
                        this.site = site;
                    }
                    else {
                        this._gotoSites();
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], SiteComponent.prototype, "site", void 0);
                SiteComponent = __decorate([
                    core_1.Component({
                        selector: 'track-site',
                        templateUrl: 'app/sites/site.component.html',
                        styles: ['.mdl-textfield__label {top: 0;}'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [site_service_1.SiteService, blocks_1.ModalService, router_1.RouteParams, router_1.Router, blocks_1.ToastService])
                ], SiteComponent);
                return SiteComponent;
            }());
            exports_1("SiteComponent", SiteComponent);
        }
    }
});
//# sourceMappingURL=site.component.js.map