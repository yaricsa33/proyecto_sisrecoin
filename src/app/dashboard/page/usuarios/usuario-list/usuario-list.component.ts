import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { IResponse } from 'src/app/dashboard/interfaces/response.interface';
import { MensajesService } from 'src/app/dashboard/servicios/mensajes.service';
import { UsuarioService } from 'src/app/dashboard/servicios/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css'],
})
export class UsuarioListComponent implements OnInit {
  nombre: string = 'Perfiles de  usuarios';
  dtOptions: DataTables.Settings = {};
  usuarios: any[] = [];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private _serviceUsuario: UsuarioService,
    private router: Router,
    private _serviceMensajes: MensajesService
  ) {}

  ngOnInit(): void {
    this.listarUsuarios();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
    };
  }

  listarUsuarios() {
    this._serviceUsuario.getUsuarios().subscribe((response: IResponse) => {
      this.usuarios = response.data;
      this.dtTrigger.next(this.usuarios);
    });
  }

  eliminar(id: number) {
    this._serviceUsuario.deleteUsuario(id).subscribe((response: IResponse) => {
      if (response.error == 200) {
        this.dtTrigger = new Subject<any>();
        this.listarUsuarios();
        this._serviceMensajes.successMessage(
          'Ok',
          'Usuario eliminado con exito'
        );
      } else {
        this._serviceMensajes.errorMessage(
          'Error',
          'El usuario no se puedo eliminar',
          'Esta asociado a un mueble'
        );
      }
    });
  }

  editar(id: number) {
    this.router.navigate(['dashboard/usuario/editar', id]);
  }
}
