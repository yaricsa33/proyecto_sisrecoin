import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'autenticacion',
    loadChildren: () =>
      import('../autenticacion/autenticacion.module').then(
        (m) => m.AutenticacionModule
      ),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'autenticacion/login',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'autenticacion/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
