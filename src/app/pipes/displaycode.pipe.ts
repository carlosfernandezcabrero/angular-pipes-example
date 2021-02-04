import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displaycode'
})
export class DisplaycodePipe implements PipeTransform {

  transform(codigo: string, mostrar: boolean = false): string {
    if (mostrar) {
      return codigo;
    } else {
      let codigoencrypt = '';
      Array.from(codigo).forEach(() => {
        codigoencrypt = codigoencrypt.concat('*');
      });
      return codigoencrypt;
    }
  }

}
