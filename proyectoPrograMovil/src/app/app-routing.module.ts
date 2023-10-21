import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redireccionLogin = () => redirectUnauthorizedTo(['/login']);

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
    canActivate:[AngularFireAuthGuard], 
    data:{authGuardPipe: redireccionLogin},
    path: 'menu-prin',
    loadChildren: () => import('./pages/menu-prin/menu-prin.module').then( m => m.MenuPrinPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    canActivate:[AngularFireAuthGuard], 
    data:{authGuardPipe: redireccionLogin},
    path: 'escan',
    loadChildren: () => import('./pages/escan/escan.module').then( m => m.EscanPageModule)
  },
  {
    canActivate:[AngularFireAuthGuard], 
    data:{authGuardPipe: redireccionLogin},
    path: 'asis',
    loadChildren: () => import('./pages/asis/asis.module').then( m => m.AsisPageModule)
  },
  {
    canActivate:[AngularFireAuthGuard], 
    data:{authGuardPipe: redireccionLogin},
    path: 'asis-datos/:id',
    loadChildren: () => import('./pages/asis-datos/asis-datos.module').then( m => m.AsisDatosPageModule)
  },
  {
    path: 'recuperar-contra',
    loadChildren: () => import('./pages/recuperar-contra/recuperar-contra.module').then( m => m.RecuperarContraPageModule)
  },
  {
    canActivate:[AngularFireAuthGuard], 
    data:{authGuardPipe: redireccionLogin},
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    canActivate:[AngularFireAuthGuard], 
    data:{authGuardPipe: redireccionLogin},
    path: 'confimar-asis',
    loadChildren: () => import('./modals/confimar-asis/confimar-asis.module').then( m => m.ConfimarAsisPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
