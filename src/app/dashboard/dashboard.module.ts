import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxSpinnerModule } from 'ngx-spinner';
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
import { MuebleCrearComponent } from './page/muebles/mueble-crear/mueble-crear.component';
import { MuebleListarComponent } from './page/muebles/mueble-listar/mueble-listar.component';
import { RouterModule } from '@angular/router';
import { UsuarioService } from './servicios/usuario.service';
import { RolService } from './servicios/rol.service';
import { MensajesService } from './servicios/mensajes.service';
import { PermisoService } from './servicios/permiso.service';
import { AutenticacionService } from './servicios/autenticacion.service';
import { MateriaPrimaService } from './servicios/materiaPrima.service';
import { MuebleService } from './servicios/mueble.service';
import { VentaService } from './servicios/venta.service';
import { InicioComponent } from './page/inicio/inicio.component';
import { MueblesAsignadosListarComponent } from './page/mueblesAsignados/muebles-asignados-listar.component';
import { DataTablesModule } from 'angular-datatables';
import { NgChartsModule } from 'ng2-charts';
import { InicioService } from './servicios/inicio.service';

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
    MuebleCrearComponent,
    MuebleListarComponent,
    MueblesAsignadosListarComponent,
    InicioComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    DashboardRoutingModule,
    CompartidosModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    DataTablesModule,
    NgChartsModule,
  ],
  providers: [
    UsuarioService,
    RolService,
    PermisoService,
    MensajesService,
    DatePipe,
    AutenticacionService,
    MateriaPrimaService,
    MuebleService,
    VentaService,
    InicioService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}

export class AppModule {}
