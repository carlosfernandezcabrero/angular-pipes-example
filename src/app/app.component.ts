import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Hulk';
  arreglo: number[] = [1, 2, 3, 4];
  PI: number = Math.PI;
  numeroEntero = 3;
  porcentaje = 0.293;
  salario = 1450.39;
  fecha = new Date();
  idioma = 'es';
  numeroMiPipe = 2;
  activo = false;
  codigo: string;
  video = 'https://www.youtube.com/embed/fXpMiweCC_o';

  constructor(){
    this.codigo = this.generarCodigo();
  }

  promesa = new Promise<string>(resuelto => {
    setTimeout(() => {
      resuelto('Hola mundo!');
    }, 3000);
  });

  servidor = {
    nombre: 'splunk-server',
    ip: '192.168.0.0',
    os: 'Windows NT',
    departamentoPropietario: {
      nombre: 'Splunk Applications'
    }
  };

  cambiarIdioma(idioma: string): void{
    this.idioma = idioma;
  }

  generarCodigo(): string{
    const min = 1;
    const max = 3000;
    const codigo: number = Math.random() * (max - min) + min;
    return codigo.toString();
  }

  cambiarActivo(): void{
    if (this.activo){
      this.activo = false;
    } else {
      this.activo = true;
    }
  }

}
