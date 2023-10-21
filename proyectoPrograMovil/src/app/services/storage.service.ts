import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Preferences } from '@capacitor/preferences';

const keyStorageUser = "usuarioData";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public correoUsuario:string = "";

  constructor(private authFire:AngularFireAuth) { }

  async getItem(llave:string):Promise<string | null>{
    const obj = await Preferences.get({key:llave});
    return obj.value;
  }

  async setItem(llave:string, valor:string){
    await Preferences.set({key:llave,value:valor});
  }

  async obtenerUsuario(){
    const usuarios = await this.getItem(keyStorageUser);

    if(usuarios == null){
      return [];
    }

    const users =JSON.parse(usuarios);

    if (users){
      return users
    }else{
      return [];
    }
  }

  async guardarUsuario(usuario:any[]){
    const usersStorage = await this.obtenerUsuario();
    for (const i of usersStorage) {
      if (i){
        usuario.push(i);
      }
    }
    this.setItem(keyStorageUser,JSON.stringify(usuario));
  }

  async obtenerAsis(){
    const asistencia = await this.getItem(keyStorageUser);

    if(asistencia == null){
      return [];
    }

    const asis =JSON.parse(asistencia);

    if (asis){
      return asis
    }else{
      return [];
    }
  }

  async guardarAsis(asistencia:any[]){
    const usersStorage = await this.obtenerAsis();
    for (const i of usersStorage) {
      if (i){
        asistencia.push(i);
      }
    }
    this.setItem(keyStorageUser,JSON.stringify(asistencia));
  }
}
