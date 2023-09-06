import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmAsisPageRoutingModule } from './confirm-asis-routing.module';

import { ConfirmAsisPage } from './confirm-asis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmAsisPageRoutingModule
  ],
  declarations: [ConfirmAsisPage]
})
export class ConfirmAsisPageModule {}
