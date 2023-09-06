import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsisDatosPageRoutingModule } from './asis-datos-routing.module';

import { AsisDatosPage } from './asis-datos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsisDatosPageRoutingModule
  ],
  declarations: [AsisDatosPage]
})
export class AsisDatosPageModule {}
