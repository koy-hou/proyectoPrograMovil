import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertaService } from 'src/app/services/alerta.service';
import { AnimationController, MenuController} from '@ionic/angular';
import type { Animation} from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-menu-prin',
  templateUrl: './menu-prin.page.html',
  styleUrls: ['./menu-prin.page.scss'],
})
export class MenuPrinPage implements OnInit {

  private animation!: Animation;

  usuario:any;
  usuarioFiltro:any;

  nombre: string = ""
  constructor(private router: Router, 
              private alerta: AlertaService, private activatedRoute: ActivatedRoute, private animationCtrl: AnimationController,
              private storage:StorageService, private auth:AngularFireAuth, private menuCtrl:MenuController) { }

  async salir() {
    var confirm = await this.alerta.confirmarAlert("¿Desea cerrar la sesión?", "Confirmar", "Cancelar");
    if (confirm == true) {
      await this.auth.signOut();
      this.router.navigateByUrl("login");
    }
  }

  ngOnInit() {
    this.nombre = this.activatedRoute.snapshot.params['estudiante'];
    this.cargarUsuario();
  }

  ngAfterViewInit() {
     this.animation = this.animationCtrl
     .create()
     .addElement(document.querySelectorAll(".__button"))
     .duration(1500)
     .iterations(10)
     .direction('alternate')
     .fromTo('background', 'blue', 'var(--background)');
  }

  ionViewWillLeave(){
    this.animation.stop();
  }

  ionViewDidLeave(){
    this.menuCtrl.close();
  }

  ionViewDidEnter(){
    this.animation.play();
  }

  async cargarUsuario(){
    this.usuario = await this.storage.obtenerUsuario();
    var emailUserToken = await this.auth.currentUser;
    this.usuarioFiltro = this.usuario.filter((e: { usuario: string; }) => e.usuario == emailUserToken?.email);
  }
  
  visualizar() {
    this.router.navigateByUrl('asis');
  }
  escanear() {
    this.router.navigateByUrl('escan');
  }

  perfilUsuario(){
    this.router.navigateByUrl("perfil");
  }

  menu(){
    this.menuCtrl.toggle();
  }

  closeMenu(){
    this.menuCtrl.close();
  }
}
