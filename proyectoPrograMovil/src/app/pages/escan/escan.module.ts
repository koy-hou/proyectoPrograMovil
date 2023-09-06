import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscanPageRoutingModule } from './escan-routing.module';

import { EscanPage } from './escan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscanPageRoutingModule
  ],
  declarations: [EscanPage]
})
export class EscanPageModule {}
