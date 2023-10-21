import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Clipboard } from '@capacitor/clipboard';
import { AlertaService } from 'src/app/services/alerta.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public copiedText: string = '';
  usuario:any;
  usuarioFiltro:any;
  constructor(private storage:StorageService, private auth:AngularFireAuth, private alerta:AlertaService) { }

  ngOnInit() {
    this.cargarUsuario();
  }

  async cargarUsuario(){
    this.usuario = await this.storage.obtenerUsuario();
    var emailUserToken = await this.auth.currentUser;
    this.usuarioFiltro = this.usuario.filter((e: { usuario: string; }) => e.usuario == emailUserToken?.email);
  }

  //Plugin
  async copyTextToClipboard() {
    const text = "Wena profe como esta";
    await Clipboard.write({
      string: text
    });
    this.alerta.toasts('Pluggin Funcionando uwu');
  }

  async readTextFromClipboard() {
    const { type, value } = await Clipboard.read();
    this.alerta.toasts(value);
  }
}
