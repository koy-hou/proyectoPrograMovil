import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-asis',
  templateUrl: './confirm-asis.page.html',
  styleUrls: ['./confirm-asis.page.scss'],
})
export class ConfirmAsisPage implements OnInit {

  constructor(private router:Router) {}

  ngOnInit() {
  }

  confirmar(){
    this.router.navigateByUrl('menu-prin/' + 'admin' );
  }
}
