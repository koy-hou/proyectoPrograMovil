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

  async confirmarAlert(msg:string,btn_si:string,btn_no:string){
    let promise = new Promise<boolean>(async (resolve) =>{
      var alert = await this.alertService.create({cssClass:"",message:msg,buttons:
      [
        {
          text:btn_si,
          handler:() =>{
            resolve(true);
          }
        },
        {
          text:btn_no,
          handler:() =>{
            resolve(false);
          }
        }
      ]});
      await alert.present();
    })
    return promise;
  }
  
}