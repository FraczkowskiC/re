import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationFilter'
})
export class LocationFilterPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter(item => (item.name.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) !== -1) || 
    (item.lawyer.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) !== -1))
  }
}
