import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { ConfimarAsisPage } from 'src/app/modals/confimar-asis/confimar-asis.page'
import { AlertaService } from 'src/app/services/alerta.service';

@Component({
  selector: 'app-escan',
  templateUrl: './escan.page.html',
  styleUrls: ['./escan.page.scss'],
})
export class EscanPage implements OnInit {

  constructor(private router:Router, private activatedRoute:ActivatedRoute, private alerta:AlertaService) { }

  qr: any='';

  ngOnInit() {
  }

  async escan(){ 

    this.qr = (await BarcodeScanner.scan()).code;
    try {
      this.mostrarQr();
    } catch (error) {
      
    }
  }

  async mostrarQr(){
    var code = [];
    code.push(this.qr);
    const parametros = {
      dataqr: this.qr
    }
    await this.alerta.mostrarModal(ConfimarAsisPage,parametros,false);
  }
}
