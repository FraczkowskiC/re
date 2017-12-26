import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailFilter'
})
export class EmailFilterPipe implements PipeTransform {

  transform(value: any[], args?: string): any {
    if (!args) {
      return value;
    }
    return value.filter(item => item.name.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) !== -1)
  }

}
