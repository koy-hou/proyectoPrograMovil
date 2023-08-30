import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPrinPageRoutingModule } from './menu-prin-routing.module';

import { MenuPrinPage } from './menu-prin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPrinPageRoutingModule
  ],
  declarations: [MenuPrinPage]
})
export class MenuPrinPageModule {}
