import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu-prin/:estudiante',
    loadChildren: () => import('./pages/menu-prin/menu-prin.module').then( m => m.MenuPrinPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'escan',
    loadChildren: () => import('./pages/escan/escan.module').then( m => m.EscanPageModule)
  },
  {
    path: 'confirm-asis',
    loadChildren: () => import('./pages/confirm-asis/confirm-asis.module').then( m => m.ConfirmAsisPageModule)
  },
  {
    path: 'asis',
    loadChildren: () => import('./pages/asis/asis.module').then( m => m.AsisPageModule)
  },
  {
    path: 'asis-datos',
    loadChildren: () => import('./pages/asis-datos/asis-datos.module').then( m => m.AsisDatosPageModule)
  },
  {
    path: 'recuperar-contra',
    loadChildren: () => import('./pages/recuperar-contra/recuperar-contra.module').then( m => m.RecuperarContraPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
