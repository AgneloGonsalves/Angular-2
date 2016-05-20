import { Component, provide } from 'angular2/core';//import dependencies
import { HTTP_PROVIDERS, XHRBackend } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import 'rxjs/Rx'; // load the full rxjs

//import { InMemoryBackendConfig, InMemoryBackendService, SEED_DATA } from 'a2-in-memory-web-api/core';
//import { InMemorytrackService } from '../api/in-memory-track.service';
import { SitesComponent, SiteService } from './sites/sites';
import { CONFIG, MessageService } from './shared/shared';
import { ExceptionService, ModalComponent, ModalService, SpinnerComponent, SpinnerService, ToastComponent, ToastService } from './blocks/blocks';

@Component({
    selector: 'site-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, ModalComponent, SpinnerComponent, ToastComponent],
  providers: [
    HTTP_PROVIDERS,
    //provide(XHRBackend, { useClass: InMemoryBackendService }),
    //provide(SEED_DATA, { useClass: InMemorytrackService }),
    //provide(InMemoryBackendConfig, { useValue: { delay: 0 } }),
    ROUTER_PROVIDERS,
    SiteService,
    //EntityService,
    ExceptionService,
    MessageService,
    ModalService,
    SpinnerService,
    ToastService
  ]
})
@RouteConfig([
  { path: '/...', name: 'Sites', component: SitesComponent, useAsDefault: true }
])
export class AppComponent {
  public menuItems = [
    { caption: 'Sites', link: ['Sites'] }
  ];

  constructor(
    private _messageService: MessageService,
    private _modalService: ModalService) {
  }

  resetDb() {
    let msg = 'Are you sure you want to reset the database?';
    this._modalService.activate(msg).then(responseOK => {
      if (responseOK) {
        this._messageService.resetDb();
      }
    });
  }
}
