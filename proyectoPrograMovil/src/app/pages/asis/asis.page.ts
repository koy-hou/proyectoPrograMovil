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
    this.cargarAsistencias();
  }

  cargarAsistencias(){
    this.asistenciasArray.push(
      {
        id: 1,
        Asignatura: "Arquitectura",
        Seccion:"ASY4131-003D",
        Profesor:"Camilo Alexis Felipe Sebastian Muñoz",
        Fecha:"04-09-2023",
        Hora:"16:41-18:50"
      },
      {
        id: 2,
        Asignatura: "Calidad de sofware",
        Seccion:"CSY4111-002D",
        Profesor:"Francisco Iturra",
        Fecha:"05-09-2023",
        Hora:"16:01-17:20"
      },
      {
        id: 3,
        Asignatura: "Arquitectura",
        Seccion:"ASY4131-003D",
        Profesor:"Camilo Alexis Felipe Sebastian Muñoz",
        Fecha:"05-09-2023",
        Hora:"string"
      },
      {
        id: 4,
        Asignatura: "Programacion de Aplicaciones Moviles",
        Seccion:"PGY4121-001D",
        Profesor:"Guillermo Villacura",
        Fecha:"08-09-2023",
        Hora:"14:31-16:40"
      }
    )
  }
}
