import { Component, OnInit } from '@angular/core';
import { IPermiso } from 'src/app/dashboard/interfaces/permiso.interface';
import { IResponse } from 'src/app/dashboard/interfaces/response.interface';
import { AutenticacionService } from 'src/app/dashboard/servicios/autenticacion.service';
import { PermisoService } from 'src/app/dashboard/servicios/permiso.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  idRol: number;
  permisos: IPermiso[] = [];

  panelUsuario: boolean = false;
  manofactura: boolean = false;
  panelVentas: boolean = false;
  asignaciones: boolean = false;

  constructor(
    private _serviceAuth: AutenticacionService,
    private _servicePermiso: PermisoService
  ) {}

  ngOnInit(): void {
    this.idRol = this._serviceAuth.getUsuario().idRol;
    this.getPermisosIdrol();
  }

  getPermisosIdrol() {
    this._servicePermiso
      .getPermisoPorIdRol(this.idRol)
      .subscribe(({ data }: IResponse) => {
        this.permisos = data;
        for (let i = 0; i < this.permisos.length; i++) {
          if (this.permisos[i].seccion == 'panelUsuarios') {
            this.panelUsuario = true;
          }
          if (this.permisos[i].seccion == 'manofactura') {
            this.manofactura = true;
          }
          if (this.permisos[i].seccion == 'PanelVentas') {
            this.panelVentas = true;
          }
          if (this.permisos[i].seccion == 'Asignaciones') {
            this.asignaciones = true;
          }
        }
      });
  }
}
