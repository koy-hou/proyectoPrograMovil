import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor(private alertService:AlertController, private cargarControlador:LoadingController, private cargarModal:ModalController, 
              private cargarToast:ToastController) { }
  
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

  async mostrarModal(componente:any,props:any= {}, hideable = false){
    var modal = await this.cargarModal.create(
      {
        component:componente,
        cssClass:"modalClass",
        componentProps:props,
        backdropDismiss:hideable
      });
      await modal.present();
  }

  async toasts(msg:string, duracion:number = 2000){
    var toast = await this.cargarToast.create(
      {
        cssClass:"toastClass",
        message:msg,
        duration:duracion,
        position:"bottom",
        color:"dark"
      });
      await toast.present();
      return toast;
  }
  
}