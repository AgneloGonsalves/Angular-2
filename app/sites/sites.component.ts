import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { SiteComponent } from './site.component';
import { SiteListComponent } from './site-list.component';
import { SiteService } from './site.service';

@Component({
  selector: 'track-sites-root',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', name: 'Sites', component: SiteListComponent, useAsDefault: true },
	{ path: '/list/:id', name: 'Sites', component: SiteListComponent	},
	{ path: '/:id', name: 'Site', component: SiteComponent }
])
export class SitesComponent { }
