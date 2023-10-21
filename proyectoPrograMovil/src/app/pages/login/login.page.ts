import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertaService } from 'src/app/services/alerta.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = "";
  contra: string = "";

  constructor(private router: Router, private alerta: AlertaService, private auth:AngularFireAuth, private storage:StorageService) { }

  async login() {
    const loader = await this.alerta.pantallaCarga("Cargando");

    if (this.usuario == "") {
      await loader.dismiss();
      this.alerta.mostrarAlerta("Debe ingresar un usuario","Error");
      return;
    }
    if (this.contra == "") {
      await loader.dismiss();
      this.alerta.mostrarAlerta("Debe ingresar una contraseña","Error");
      return;
    }
    try {
      const req = await this.auth.signInWithEmailAndPassword(this.usuario,this.contra);
      this.storage.correoUsuario = this.usuario;
      await loader.dismiss();
      await this.router.navigateByUrl('menu-prin');
    } catch (error:any) {
      if (error.code == 'auth/user-not-found') {
        await loader.dismiss();
        await this.alerta.mostrarAlerta("El correo no es el correcto.","Error");
      }
      if (error.code == 'auth/wrong-password') {
        await loader.dismiss();
        await this.alerta.mostrarAlerta("El largo de la contraseña es muy corto.","Error");
      }
    }
  }


  ngOnInit() {
  }

}
