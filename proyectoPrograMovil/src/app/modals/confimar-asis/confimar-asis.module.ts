import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfimarAsisPageRoutingModule } from './confimar-asis-routing.module';

import { ConfimarAsisPage } from './confimar-asis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfimarAsisPageRoutingModule
  ],
  declarations: [ConfimarAsisPage]
})
export class ConfimarAsisPageModule {}
