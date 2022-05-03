import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { CompartidosModule } from '../compartidos/compartidos.module';
import { UsuarioCrearComponent } from './page/usuarios/usuario-crear/usuario-crear.component';
import { UsuarioListComponent } from './page/usuarios/usuario-list/usuario-list.component';
import { PermisoCrearComponent } from './page/permisos/permiso-crear/permiso-crear.component';
import { PermisoListComponent } from './page/permisos/permiso-list/permiso-list.component';
import { RolCrearComponent } from './page/roles/rol-crear/rol-crear.component';
import { RolListComponent } from './page/roles/rol-list/rol-list.component';
import { MateriaPrimaCrearComponent } from './page/materiaPrima/materia-prima-crear/materia-prima-crear.component';
import { MateriaPrimaListarComponent } from './page/materiaPrima/materia-prima-listar/materia-prima-listar.component';
import { VentasCrearComponent } from './page/ventas/ventas-crear/ventas-crear.component';
import { VentasListarComponent } from './page/ventas/ventas-listar/ventas-listar.component';
import { VentasModalComponent } from './page/ventas/ventas-modal/ventas-modal.component';
import { MuebleCrearComponent } from './page/muebles/mueble-crear/mueble-crear.component';
import { MuebleListarComponent } from './page/muebles/mueble-listar/mueble-listar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    UsuarioCrearComponent,
    UsuarioListComponent,
    PermisoCrearComponent,
    PermisoListComponent,
    RolCrearComponent,
    RolListComponent,
    MateriaPrimaCrearComponent,
    MateriaPrimaListarComponent,
    VentasCrearComponent,
    VentasListarComponent,
    VentasModalComponent,
    MuebleCrearComponent,
    MuebleListarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CompartidosModule,
    RouterModule
  ]
})
export class DashboardModule { }
