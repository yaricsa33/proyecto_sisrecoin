import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IResponse } from 'src/app/dashboard/interfaces/response.interface';
import { MensajesService } from 'src/app/dashboard/servicios/mensajes.service';
import { PermisoService } from 'src/app/dashboard/servicios/permiso.service';


@Component({
  selector: 'app-permiso-list',
  templateUrl: './permiso-list.component.html',
  styleUrls: ['./permiso-list.component.css']
})
export class PermisoListComponent implements OnInit {

  nombre: string = "Listar permisos";
  permiso: any[] = [];

  constructor(
    private _ServicePermiso: PermisoService,
    private serviceMensajes: MensajesService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.listarPermiso();
  }

  listarPermiso() {
    this._ServicePermiso.getPermiso().subscribe((response: IResponse) => {
      this.permiso = response.data;

    });
  }


  eliminar(id: number) {
    this._ServicePermiso.deleteEliminarPermiso(id).subscribe((response: IResponse) => {
      if (response.error == 200) {
        this.listarPermiso();
        this.serviceMensajes.successMessage('Ok', 'permiso eliminado con exito');
      } else {
        this.serviceMensajes.errorMessage('Error', 'El permiso no se puedo eliminar', '');
      }
    });
  }

  editar(id: number) {
    this.router.navigate(['dashboard/permiso/editar', id]);
  }


}
