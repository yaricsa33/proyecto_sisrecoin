import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { LoginComponent } from './login/login.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CambiarContrasenaComponent,
    LoginComponent,
    RecuperarContrasenaComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    RouterModule
  ]
})
export class AutenticacionModule { }
