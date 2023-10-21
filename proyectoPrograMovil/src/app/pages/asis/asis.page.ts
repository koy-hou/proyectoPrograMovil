import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-asis',
  templateUrl: './asis.page.html',
  styleUrls: ['./asis.page.scss'],
})
export class AsisPage implements OnInit {

  asis:any;
  asisFiltro:any;

  constructor(private router:Router, private storage:StorageService, private auth:AngularFireAuth) { }

  ngOnInit() {
    this.cargarAsistencias();
  }

  async cargarAsistencias(){
    this.asis = await this.storage.obtenerUsuario();
    var emailUserToken = await this.auth.currentUser;
    this.asisFiltro = this.asis.filter((e: { asis: string; }) => e.asis == emailUserToken?.email);
  }
}
