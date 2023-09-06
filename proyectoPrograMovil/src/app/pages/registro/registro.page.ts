import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertaService } from 'src/app/services/alerta.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private router: Router, private alerta: AlertaService) { }

  ngOnInit() {
  }

  confirmar() {
    this.alerta.mostrarAlerta("Se ha registrado correctamente","");
    this.router.navigateByUrl('login');
  }

}
