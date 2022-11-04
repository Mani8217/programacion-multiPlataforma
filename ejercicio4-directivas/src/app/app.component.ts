import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio4-directivas';


alumnos: any = [
  {valoracion: 'alta',repetidor:false, nombre:'Juan', apellidos:'Lopez', nota:7.5},
  {valoracion: 'media',repetidor:false, nombre:'Maria', apellidos:'Sanchez', nota:5.6},
  {valoracion: 'baja',repetidor:true, nombre:'elena', apellidos:'Arias', nota:3.3},
  {valoracion: 'media',repetidor:true, nombre:'Roberto', apellidos:'Rodriguez', nota:6.4},
  {valoracion: 'alta',repetidor:false, nombre:'Javier', apellidos:'Martinez', nota:4.1},
  {valoracion: 'baja',repetidor:false, nombre:'Marta', apellidos:'Gonzales', nota:8.9}
]
/*
type trata de la misma manera los array, matrices , colecciones
la difinicion queda reflejada de diversas maneras , dependiendo
de la tipacion de las variables

let lista:number[];
->lista=[1,8,9];
-> let nombres: string[];
*/
}
