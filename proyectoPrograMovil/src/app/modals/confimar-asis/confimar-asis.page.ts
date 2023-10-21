import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertaService } from 'src/app/services/alerta.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-confimar-asis',
  templateUrl: './confimar-asis.page.html',
  styleUrls: ['./confimar-asis.page.scss'],
})
export class ConfimarAsisPage implements OnInit {
  
  @Input() dataqr: any;
  asis:any;

  nombre:string="";
  usuario:string="";
  idAsistencia:string="";
  idStorage:any;

  constructor(private modalController:ModalController, private alerta:AlertaService, private auth:AngularFireAuth,
              private storage:StorageService) { }

  ngOnInit() {
    this.asis = JSON.parse(this.dataqr);
    this.conseguirEmail();
  }
  

  async confimar(){
    this.idAsistencia = this.usuario+this.asis.asignatura+this.asis.fecha+this.asis.hora+this.asis.seccion;
    var asistencia = [{
        id:this.idAsistencia,
        Asignatura:this.asis.asignatura,
        Profesor:this.asis.docente,
        Fecha:this.asis.fecha,
        Hora:this.asis.hora,
        Leccion:this.asis.eccion,
        Sala:this.asis.sala,
        Seccion:this.asis.seccion,
        Correo:this.usuario
    }];
    this.idStorage = (await this.storage.obtenerAsis()).filter((e: { id: string; }) => e.id === this.idAsistencia);

    if(this.idStorage.length > 0)
    {
      this.alerta.mostrarAlerta("Error, asistencia ya registrada","Error");
      this.close();
    }
    else{
      var confirmar = await this.alerta.confirmarAlert("¿Guardar Asistencia?","Confirmar","Cancelar");
      if( confirmar == true ) {
        this.storage.guardarAsis(asistencia);
        this.alerta.toasts("Asistencia registrada");
        this.close();
      }
      else{
        this.alerta.toasts("Asistencia cancelada");
        this.close();
      }
      
    }
  }

  async conseguirEmail(){
      this.usuario = (await this.auth.currentUser)?.email!;
  }
  
  close(){
    this.modalController.dismiss();
  }

}
