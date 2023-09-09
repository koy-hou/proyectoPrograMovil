import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AlertaService } from 'src/app/services/alerta.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  correo: string = "";
  contra: string = "";

  constructor(private router: Router, private alerta: AlertaService, private autentificacion:AngularFireAuth) { }

  ngOnInit() {
  }

  async confirmar() {
    const loader = await this.alerta.pantallaCarga("Cargando");
    try {
      const request = await this.autentificacion.createUserWithEmailAndPassword(this.correo, this.contra);
      await this.router.navigateByUrl('login');
      await loader.dismiss();
      await this.alerta.mostrarAlerta("Se ha registrado correctamente","Registro exitoso");
    } catch (error:any) {
      if (error.code == 'auth/email-already-in-use') {
        await loader.dismiss();
        await this.alerta.mostrarAlerta("El correo ya se encuentra registrado","Correo Erroneo");
      }
    }
  }
}
