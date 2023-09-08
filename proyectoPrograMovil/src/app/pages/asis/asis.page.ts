import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { asistencias } from 'src/app/models/asistencias';

@Component({
  selector: 'app-asis',
  templateUrl: './asis.page.html',
  styleUrls: ['./asis.page.scss'],
})
export class AsisPage implements OnInit {

  asistenciasArray:asistencias[]=[];

  constructor(private router:Router,) { }

  ngOnInit() {
  }

  cargarAsistencias(){
    this.asistenciasArray.push(
      {
        id: 1,
        Asignatura: "Calidad de sofware",
        Seccion:"string",
        Profesor:"string",
        Fecha:"string",
        Hora:"string"
      },
      {
        id: 2,
        Asignatura: "Arquitectura",
        Seccion:"string",
        Profesor:"string",
        Fecha:"string",
        Hora:"string"
      },
      {
        id: 3,
        Asignatura: "Programacion de Aplicaciones Moviles",
        Seccion:"string",
        Profesor:"string",
        Fecha:"string",
        Hora:"string"
      }
    )
  }
}
