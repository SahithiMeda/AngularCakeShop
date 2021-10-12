import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formater'
})
export class FormaterPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    return value?.join(', ');
  }

}
