import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona';



const listPersonas: Persona[] = [
  { nombre: "Tomas", apellido: "Perez", correo: "alejandro@gmail.com", tipoDocumento: "dni", documento: 1193069650, fechaIngreso: new Date(), soat: "si", tecno: "si", placa: "eju456", carga: "xxx", peso: 145 },
  { nombre: "Tomas", apellido: "Perez", correo: "alejandro@gmail.com", tipoDocumento: "dni", documento: 1193069650, fechaIngreso: new Date(), soat: "si", tecno: "si", placa: "eju456", carga: "xxx", peso: 145 },
  { nombre: "Tomas", apellido: "Perez", correo: "alejandro@gmail.com", tipoDocumento: "dni", documento: 1193069650, fechaIngreso: new Date(), soat: "si", tecno: "si", placa: "eju456", carga: "xxx", peso: 145 },
  { nombre: "Tomas", apellido: "Perez", correo: "alejandro@gmail.com", tipoDocumento: "dni", documento: 1193069650, fechaIngreso: new Date(), soat: "si", tecno: "si", placa: "eju456", carga: "xxx", peso: 145 },
  { nombre: "Tomas", apellido: "Perez", correo: "alejandro@gmail.com", tipoDocumento: "dni", documento: 1193069650, fechaIngreso: new Date(), soat: "si", tecno: "si", placa: "eju456", carga: "xxx", peso: 145 },
  { nombre: "Tomas", apellido: "Perez", correo: "alejandro@gmail.com", tipoDocumento: "dni", documento: 1193069650, fechaIngreso: new Date(), soat: "si", tecno: "si", placa: "eju456", carga: "xxx", peso: 145 },


];

@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})
export class ListPersonasComponent implements OnInit {
  displayedColumns: string[] = ['nombre','apellido','correo','tipoDocumento','documento','fechaIngreso','soat','tecno','placa','carga','peso'];
  dataSource = listPersonas;
  

  constructor() { }

  ngOnInit(): void {
  }

}
