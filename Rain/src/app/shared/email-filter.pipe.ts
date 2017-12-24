import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailFilter'
})
export class EmailFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
