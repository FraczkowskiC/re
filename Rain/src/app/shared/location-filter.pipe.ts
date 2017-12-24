import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationFilter'
})
export class LocationFilterPipe implements PipeTransform {

  transform(value: any[], args?: any): any {
    args = args ? args.toLocaleLowerCase() : null;
    return args ? value.filter(item => item.name.indexOf(args[0]) !== -1, item =>  item.email.indexOf(args[0]) !== -1 ) : value;
  }
}
