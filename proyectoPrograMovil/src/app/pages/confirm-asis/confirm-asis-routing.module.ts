import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmAsisPage } from './confirm-asis.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmAsisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmAsisPageRoutingModule {}
