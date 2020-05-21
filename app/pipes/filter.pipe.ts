import { Pipe, PipeTransform } from '@angular/core';
import { Languages } from '../models/model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

transform(languages: Languages[], searchText?: string): Languages[] {
    if (!searchText) {
      return languages;
    } else {
      return languages.filter(function (item: any) {
        for (let property in item) {
          if (item[property] === null) {
            continue;
          }
          if (item[property].toString().toLowerCase().includes(searchText)) {
            return true;
          }
        }
        return false;
      });
    }
  }

}