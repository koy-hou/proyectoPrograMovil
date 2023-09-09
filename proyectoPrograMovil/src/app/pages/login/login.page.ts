import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertaService } from 'src/app/services/alerta.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = "";
  contra: string = "";

  constructor(private router: Router, private alerta: AlertaService) { }

  login() {
    if (this.usuario == "") {
      this.alerta.mostrarAlerta("Ingresar Usuario", "Error");
      return;

    }
    if (this.contra == "") {
      this.alerta.mostrarAlerta("Ingrese contraseña", "Error");
      return;
    }

    if (this.usuario == "pgy4121-001d" && this.contra == "pgy4121-001d") {
      this.router.navigateByUrl('menu-prin/'+ this.usuario);
    } else {
      this.alerta.mostrarAlerta("Datos Incorrectos", "Error");
      return;
    }
  }


  ngOnInit() {
  }

}
