import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], search: string, field: string): any[] {
    if (!array) return [];
    if (!search) return array;
    search = search.toLowerCase();
    return array.filter(array => {
      if (array && array[field]) {
        return array[field].toLowerCase().includes(search);
      }
      return false;
    });
  }

}
