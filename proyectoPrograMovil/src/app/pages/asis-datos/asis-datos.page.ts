import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-asis-datos',
  templateUrl: './asis-datos.page.html',
  styleUrls: ['./asis-datos.page.scss'],
})
export class AsisDatosPage implements OnInit {

  asis:any;
  asisFiltro:any;

  idAsis:string = "";

  constructor(private router:Router, private storage:StorageService, private auth:AngularFireAuth, 
              private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.idAsis = this.activatedRoute.snapshot.params['id'];
    this.cargarAsistenci();
  }

  async cargarAsistenci(){
    this.asis = await this.storage.obtenerAsis();
    this.asisFiltro = this.asis.filter((e: { id: string; }) => e.id == this.idAsis);
  }

}
