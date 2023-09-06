import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsisDatosPage } from './asis-datos.page';

const routes: Routes = [
  {
    path: '',
    component: AsisDatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsisDatosPageRoutingModule {}
