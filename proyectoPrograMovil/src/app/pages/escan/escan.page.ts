import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escan',
  templateUrl: './escan.page.html',
  styleUrls: ['./escan.page.scss'],
})
export class EscanPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  escan(){
    this.router.navigateByUrl('confirm-asis');
    console.log("funciona")
  }
}
