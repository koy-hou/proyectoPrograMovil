import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPrinPage } from './menu-prin.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPrinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPrinPageRoutingModule {}
