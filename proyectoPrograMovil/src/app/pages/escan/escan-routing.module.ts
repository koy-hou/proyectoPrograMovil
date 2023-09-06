import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscanPage } from './escan.page';

const routes: Routes = [
  {
    path: '',
    component: EscanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscanPageRoutingModule {}
