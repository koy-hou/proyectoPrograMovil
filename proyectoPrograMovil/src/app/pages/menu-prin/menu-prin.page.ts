import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-prin',
  templateUrl: './menu-prin.page.html',
  styleUrls: ['./menu-prin.page.scss'],
})
export class MenuPrinPage implements OnInit {

  constructor(private router:Router) {  }

  salir() {
    this.router.navigateByUrl("login");
  }

  ngOnInit() {
  }

}
