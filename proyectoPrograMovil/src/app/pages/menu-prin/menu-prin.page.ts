import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertaService } from 'src/app/services/alerta.service';
import { AnimationController } from '@ionic/angular';
import type { Animation } from '@ionic/angular';

@Component({
  selector: 'app-menu-prin',
  templateUrl: './menu-prin.page.html',
  styleUrls: ['./menu-prin.page.scss'],
})
export class MenuPrinPage implements OnInit {

  private animation!: Animation;

  nombre: string = ""
  constructor(private router: Router, 
              private alerta: AlertaService, private activatedRoute: ActivatedRoute, private animationCtrl: AnimationController) { }

  async salir() {
    var confirm = await this.alerta.confirmarAlert("¿Desea cerrar la sesión?", "Confirmar", "Cancelar");
    if (confirm == true) {
      this.router.navigateByUrl("login");
    }
  }

  ngOnInit() {
    this.nombre = this.activatedRoute.snapshot.params['estudiante'];
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll("ion-button"))
      .duration(1500)
      .iterations(10)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
  }

  visualizar() {
    this.router.navigateByUrl('asis');
  }
  escanear() {
    this.router.navigateByUrl('escan');
  }

}
