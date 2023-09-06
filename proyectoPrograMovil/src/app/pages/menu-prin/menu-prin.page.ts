import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertaService } from 'src/app/services/alerta.service';

@Component({
  selector: 'app-menu-prin',
  templateUrl: './menu-prin.page.html',
  styleUrls: ['./menu-prin.page.scss'],
})
export class MenuPrinPage implements OnInit {

  nombre:string = ""
  constructor(private router:Router, private alerta:AlertaService, private activatedRoute:ActivatedRoute) {  }

  async salir() {
    var confirm = await this.alerta.confirmarAlert("¿Desea cerrar la sesión?","Confirmar","Cancelar");
    if(confirm == true ) {
      this.router.navigateByUrl("login");
    }
  }

  ngOnInit() {
    this.nombre = this.activatedRoute.snapshot.params['estudiante'];
  }

}
