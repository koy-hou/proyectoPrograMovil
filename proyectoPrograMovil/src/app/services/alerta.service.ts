import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor(private alertService:AlertController) { }
  async mostrarAlerta(msg:string,titulo:string){
    var alert = await this.alertService.create({cssClass:"alertClass",message:msg,header:titulo,buttons:['ok']})
    await alert.present();
    return alert;
  }
  
}