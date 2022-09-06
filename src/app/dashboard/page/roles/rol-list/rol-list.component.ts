import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { IResponse } from 'src/app/dashboard/interfaces/response.interface';
import { MensajesService } from 'src/app/dashboard/servicios/mensajes.service';
import { RolService } from 'src/app/dashboard/servicios/rol.service';

@Component({
  selector: 'app-rol-list',
  templateUrl: './rol-list.component.html',
  styleUrls: ['./rol-list.component.css'],
})
export class RolListComponent implements OnInit {
  nombre: string = 'Administrar roles';
  roles: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private _serviceRol: RolService,
    private router: Router,
    private _serviceMensajes: MensajesService
  ) {}

  ngOnInit(): void {
    this.listarRoles();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      search: {
        search: 'sad',
        searchPlaceholder: 'sadasd',
      },
    };
  }

  listarRoles() {
    this._serviceRol.getRol().subscribe((response: IResponse) => {
      this.roles = response.data;
      this.dtTrigger.next(this.roles);
    });
  }

  eliminar(id: number) {
    this._serviceRol.deleteEliminarRol(id).subscribe((response: IResponse) => {
      if (response.error == 200) {
        this.dtTrigger = new Subject<any>();
        this.listarRoles();
        this._serviceMensajes.successMessage('Ok', 'Rol eliminado con exito');
      } else {
        this._serviceMensajes.errorMessage(
          'Error',
          'El rol no se puedo eliminar',
          'Esta asociado a un mueble'
        );
      }
    });
  }

  editar(id: number) {
    this.router.navigate(['dashboard/rol/editar', id]);
  }
}
