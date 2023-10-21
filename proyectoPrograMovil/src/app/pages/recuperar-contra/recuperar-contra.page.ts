import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertaService } from 'src/app/services/alerta.service';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {

  usuario:string = '';

  constructor(private router: Router, private alerta: AlertaService, private auth:AngularFireAuth,) { }

  ngOnInit() {
  }

  async recuperar() {
    const loader = await this.alerta.pantallaCarga("Cargando");
    if (this.usuario == '') {
      await loader.dismiss();
      this.alerta.mostrarAlerta("Debe ingresar un correo." ,"Error");
      return;
    }
    try {
      await this.auth.sendPasswordResetEmail(this.usuario);
      await this.alerta.mostrarAlerta("Le llegara un correo a la cuenta ingresada","Recuperación de Contraseña");
      await loader.dismiss();
      await this.router.navigateByUrl("login");
    } catch (error:any) {
      if (error.code == 'auth/invalid-email') {
        await loader.dismiss();
        await this.alerta.mostrarAlerta("El correo no es el correcto.","Error");
      }
      else{
        await loader.dismiss();
        await this.alerta.mostrarAlerta("Error desconocido","Error");
      }
    }
  }

}
