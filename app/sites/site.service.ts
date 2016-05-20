import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Rx';

import { ExceptionService, SpinnerService } from '../blocks/blocks';
import { CONFIG, MessageService } from '../shared/shared';

let sitesUrl = CONFIG.baseUrls.sites;

export interface Site {
  id: number;
  name: string;
  side: string;
}

@Injectable()
export class SiteService {
  constructor(private _http: Http,
    private _exceptionService: ExceptionService,
    private _messageService: MessageService,
    private _spinnerService: SpinnerService) {
    this._messageService.state.subscribe(state => this.getSites());
  }

  addSite(site: Site) {
    let body = JSON.stringify(site);
    this._spinnerService.show();
    return this._http
      .post(`${sitesUrl}`, body)
      .map(res => res.json().data)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  deleteSite(site: Site) {
    this._spinnerService.show();
    return this._http
      .delete(`${sitesUrl}/${site.id}`)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  getSites() {
    this._spinnerService.show();
    return this._http.get(sitesUrl)
      .map((response: Response) => <Site[]>response.json().data)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  getSite(id: number) {
    this._spinnerService.show();
    return this._http.get(`${sitesUrl}/${id}`)
      .map((response: Response) => response.json().data)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }

  onDbReset = this._messageService.state;

  updateSite(site: Site) {
    let body = JSON.stringify(site);
    this._spinnerService.show();

    return this._http
      .put(`${sitesUrl}/${site.id}`, body)
      .catch(this._exceptionService.catchBadResponse)
      .finally(() => this._spinnerService.hide());
  }
}
