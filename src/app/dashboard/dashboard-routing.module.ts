import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MateriaPrimaCrearComponent } from './page/materiaPrima/materia-prima-crear/materia-prima-crear.component';
import { MateriaPrimaListarComponent } from './page/materiaPrima/materia-prima-listar/materia-prima-listar.component';
import { MuebleCrearComponent } from './page/muebles/mueble-crear/mueble-crear.component';
import { MuebleListarComponent } from './page/muebles/mueble-listar/mueble-listar.component';
import { PermisoCrearComponent } from './page/permisos/permiso-crear/permiso-crear.component';
import { PermisoListComponent } from './page/permisos/permiso-list/permiso-list.component';
import { RolCrearComponent } from './page/roles/rol-crear/rol-crear.component';
import { RolListComponent } from './page/roles/rol-list/rol-list.component';
import { UsuarioCrearComponent } from './page/usuarios/usuario-crear/usuario-crear.component';
import { UsuarioListComponent } from './page/usuarios/usuario-list/usuario-list.component';
import { VentasCrearComponent } from './page/ventas/ventas-crear/ventas-crear.component';
import { VentasListarComponent } from './page/ventas/ventas-listar/ventas-listar.component';
import { MueblesAsignadosListarComponent } from './page/mueblesAsignados/muebles-asignados-listar/muebles-asignados-listar.component';
import { InicioComponent } from './page/inicio/inicio.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: ' ', component: UsuarioCrearComponent
      },
      {
        path: 'usuario/listar', component: UsuarioListComponent
      },
      {
        path: 'usuario/crear', component: UsuarioCrearComponent
      },
      {
        path: 'usuario/editar/:id', component: UsuarioCrearComponent
      },
      {
        path: 'rol/crear', component: RolCrearComponent
      },
      {
        path: 'rol/editar/:id', component: RolCrearComponent

      },
      {
        path: 'permiso/editar/:id', component: PermisoCrearComponent
      },
      {
        path: 'materiaprima/listar', component: MateriaPrimaListarComponent
      },
      {
        path: 'materiaprima/crear', component: MateriaPrimaCrearComponent
      },
      {
        path: 'materiaprima/editar/:id', component: MateriaPrimaCrearComponent
      },
      {
        path: 'permiso/crear', component: PermisoCrearComponent
      },
      {
        path: 'rol/listar', component: RolListComponent
      },
      {
        path: 'mueble/listar', component: MuebleListarComponent
      },
      {
        path: 'mueble/crear', component: MuebleCrearComponent
      },
      {
        path: 'mueble/asignados', component: MueblesAsignadosListarComponent
      },
      {
        path: 'mueble/editar/:id', component: MuebleCrearComponent
      },
      {
        path: 'permiso/listar', component: PermisoListComponent
      },
      {
        path: 'venta/listar', component: VentasListarComponent
      },
      {
        path: 'venta/crear', component: VentasCrearComponent
      },
      {
        path: 'venta/editar/:id', component: VentasCrearComponent
      },
      {
        path: 'inicio', component: InicioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
