import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomPipe'
})
export class MyCustomPipePipe implements PipeTransform {

  transform(value: number, decimales: boolean = true): number {
    if (decimales){
      return Math.sqrt(value);
    } else {
      return Math.round(Math.sqrt(value));
    }
  }

}
