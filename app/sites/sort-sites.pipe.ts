import { Pipe, PipeTransform } from 'angular2/core';
import { Site } from './site.service';

@Pipe({ name: 'sortSites' })
export class SortSitesPipe implements PipeTransform {
  transform(value: Site[], args: any[]) {
    if (!value || !value.sort) { return value; }

    return value.sort((a: Site, b: Site) => {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    });
  }
}