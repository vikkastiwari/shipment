import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStatus'
})
export class FilterStatusPipe implements PipeTransform {
  transform(items: any[], selectedStatuses: any): any[] {
    if (!items || !selectedStatuses || selectedStatuses.length === 0) {
      return items;
    }
    return items.filter((item:any) => selectedStatuses.some((filter:any) => item.Status.includes(filter.label)));
  }
}

