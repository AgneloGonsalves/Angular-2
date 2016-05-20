System.register(['angular2/core', 'angular2/router', './site.service', './sort-sites.pipe', '../blocks/blocks'], function(exports_1, context_1) {
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
    var core_1, router_1, site_service_1, sort_sites_pipe_1, blocks_1;
    var SiteListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (site_service_1_1) {
                site_service_1 = site_service_1_1;
            },
            function (sort_sites_pipe_1_1) {
                sort_sites_pipe_1 = sort_sites_pipe_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            }],
        execute: function() {
            SiteListComponent = (function () {
                function SiteListComponent(_siteService, _filterService) {
                    this._siteService = _siteService;
                    this._filterService = _filterService;
                    this.filteredSites = this.sites;
                }
                SiteListComponent.prototype.filterChanged = function (searchText) {
                    this.filteredSites = this._filterService.filter(searchText, ['name', 'location', 'stage', 'description'], this.sites);
                };
                SiteListComponent.prototype.getSites = function () {
                    var _this = this;
                    this.sites = [];
                    this._siteService.getSites()
                        .subscribe(function (sites) {
                        _this.sites = _this.filteredSites = sites;
                        _this.filterComponent.clear();
                    });
                };
                SiteListComponent.prototype.ngOnDestroy = function () {
                    this._dbResetSubscription.unsubscribe();
                };
                SiteListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    componentHandler.upgradeDom();
                    this.getSites();
                    this._dbResetSubscription = this._siteService.onDbReset
                        .subscribe(function () { return _this.getSites(); });
                };
                __decorate([
                    core_1.ViewChild(blocks_1.FilterTextComponent), 
                    __metadata('design:type', blocks_1.FilterTextComponent)
                ], SiteListComponent.prototype, "filterComponent", void 0);
                SiteListComponent = __decorate([
                    core_1.Component({
                        selector: 'track-sites',
                        templateUrl: './app/sites/site-list.component.html',
                        directives: [blocks_1.FilterTextComponent, router_1.ROUTER_DIRECTIVES],
                        styleUrls: ['./app/sites/site-list.component.css'],
                        pipes: [sort_sites_pipe_1.SortSitesPipe],
                        providers: [blocks_1.FilterService]
                    }), 
                    __metadata('design:paramtypes', [site_service_1.SiteService, blocks_1.FilterService])
                ], SiteListComponent);
                return SiteListComponent;
            }());
            exports_1("SiteListComponent", SiteListComponent);
        }
    }
});
//# sourceMappingURL=site-list.component.js.map