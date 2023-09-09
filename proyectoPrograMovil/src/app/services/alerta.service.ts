import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor(private alertService:AlertController, private cargarControlador:LoadingController) { }
  
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

  async pantallaCarga(msg:string){
    var loader = await this.cargarControlador.create(
      {
        cssClass:"loaderClass",
        message:msg,
        translucent:true
      }
    );
    await loader.present();
    return loader;

  }
  
}