import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { LoginComponent } from './login/login.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AutenticacionService } from '../dashboard/servicios/autenticacion.service';
import { HttpClientModule } from '@angular/common/http';
import { MensajesService } from '../dashboard/servicios/mensajes.service';


@NgModule({
  declarations: [
    CambiarContrasenaComponent,
    LoginComponent,
    RecuperarContrasenaComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    AutenticacionService,
    MensajesService,
  ]
})
export class AutenticacionModule { }
