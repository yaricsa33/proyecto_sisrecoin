import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'autenticacion', loadChildren: () => import('../autenticacion/autenticacion.module').then(m => m.AutenticacionModule)
  },
  {
    path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'autenticacion/login'
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'autenticacion/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
