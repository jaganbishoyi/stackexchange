import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixToDate'
})
export class UnixToDatePipe implements PipeTransform {
  transform(value: any): any {
    const date = new Date(value * 1000);
    return date;
  }
}
