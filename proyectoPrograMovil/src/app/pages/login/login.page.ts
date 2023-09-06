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
      this.alerta.mostrarAlerta("buu", "aaa");
      return;

    }
    if (this.contra == "") {
      this.alerta.mostrarAlerta("1111", "2222");
      return;
    }

    if (this.usuario == "admin" && this.contra == "123") {
      this.router.navigateByUrl('menu-prin/'+ this.usuario);
    } else {
      this.alerta.mostrarAlerta("33333", "4444");
      return;
    }
  }


  ngOnInit() {
  }

}
