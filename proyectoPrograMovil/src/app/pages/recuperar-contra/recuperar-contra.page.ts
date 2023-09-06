import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertaService } from 'src/app/services/alerta.service';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {

  constructor(private router: Router, private alerta: AlertaService) { }

  ngOnInit() {
  }
  
  recuperar() {
    this.alerta.mostrarAlerta("Le llegara un correo a la cuenta ingresada","");
    this.router.navigateByUrl('login');
  }

}
