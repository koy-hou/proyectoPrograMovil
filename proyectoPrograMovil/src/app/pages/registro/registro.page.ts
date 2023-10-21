import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Comuna } from 'src/app/models/comuna';
import { Region } from 'src/app/models/region';
import { AlertaService } from 'src/app/services/alerta.service';
import { UbicacionService } from 'src/app/services/ubicacion.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre: string = "";
  apellido: string = "";
  correo: string = "";
  contra: string = "";
  numero: number = 0;

  regiones:Region[]=[];
  comunas:Comuna[]=[];
  regionSel:number = 0;
  comunaSel:number = 0;
  comunaSelNombre:string = "";
  regionSelNombre:string = "";


  disabledComuna:boolean = true;

  constructor(private router: Router, private alerta: AlertaService, private autentificacion:AngularFireAuth, 
              private storage:StorageService, private ubicacion:UbicacionService) { }

  ngOnInit() {
    this.cargarRegion();
  }

  async cargarRegion(){
    const req = await this.ubicacion.getRegion();
    this.regiones = req.data;
  }

  async cargarComuna(){
    try {
      const req = await this.ubicacion.getComuna(this.regionSel);
      this.comunas = req.data;
      this.disabledComuna = false;
    } catch (error:any) {
      await this.alerta.mostrarAlerta(error.error.msg,"Error");
    }
  }
  
  async confirmar() {
    const loader = await this.alerta.pantallaCarga("Cargando");
    this.comunaSelNombre = this.comunas.filter(e => e.id == this.comunaSel)[0].nombre;
    this.regionSelNombre = this.regiones.filter(e => e.id == this.regionSel)[0].nombre;
    var user =
    [
      {
        nombre:this.nombre,
        apellido:this.apellido,
        usuario:this.correo,
        contrasenna:this.contra,
        celu:this.numero,
        regionNombre:this.regionSelNombre,
        comunaNombre:this.comunaSelNombre
      }
    ]
    try {
      const request = await this.autentificacion.createUserWithEmailAndPassword(this.correo, this.contra);
      this.storage.guardarUsuario(user);
      await this.router.navigateByUrl('login');
      await loader.dismiss();
      await this.alerta.mostrarAlerta("Se ha registrado correctamente","Registro exitoso");
    } catch (error:any) {
      if (error.code == 'auth/email-already-in-use') {
        await loader.dismiss();
        await this.alerta.mostrarAlerta("El correo ya se encuentra registrado","Correo Erroneo");
      }
      if (error.code == 'auth/weak-password') {
        await loader.dismiss();
        await this.alerta.mostrarAlerta("Contraseña debil","Contraseña");
      }
      if (error.code == 'auth/invalid-email') {
        await loader.dismiss();
        await this.alerta.mostrarAlerta("El correo es invalido","Correo Erroneo");
      }
      if (this.nombre.length < 3){
        await loader.dismiss();
        await this.alerta.mostrarAlerta("El Nombre es demasiado corto","Nombre Erroneo");
      }
      if (this.apellido.length < 3){
        await loader.dismiss();
        await this.alerta.mostrarAlerta("El Apellido es demasiado corto","Nombre Erroneo");
      }
    }
  }
}
