import { Component, OnInit } from '@angular/core';
import { MuebleService } from 'src/app/dashboard/servicios/mueble.service';
import { IResponse } from 'src/app/dashboard/interfaces/response.interface';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { IMuebleAsignadosResponse } from '../../interfaces/response/mueble-asignados-response.interface';
import { UsuarioService } from 'src/app/dashboard/servicios/usuario.service';
import { IUsuario } from 'src/app/dashboard/interfaces/usuario.interface';
import { IUsuarioResponse } from 'src/app/dashboard/interfaces/response/usuario-response.interface';
import { IMateriaPrimaResponse } from '../../interfaces/response/materia-prima-response.interface';
import { MensajesService } from '../../servicios/mensajes.service';
@Component({
  selector: 'app-muebles-asignados-listar',
  templateUrl: './muebles-asignados-listar.component.html',
  styleUrls: ['./muebles-asignados-listar.component.css'],
})
export class MueblesAsignadosListarComponent implements OnInit {
  nombreTitulo: string = 'Solicitud de fabricacion ';
  muebleAsignados: IMuebleAsignadosResponse[] = [];
  mueble: IMuebleAsignadosResponse = {} as IMuebleAsignadosResponse;
  idUsuario: number;
  id: number;
  usuarios: IUsuarioResponse[] = [];
  materiasPrimas: IMateriaPrimaResponse[] = [];
  constructor(
    private _serviceMueble: MuebleService,
    private _serviceAuth: AutenticacionService,
    private _serviceMensajes: MensajesService
  ) {}

  ngOnInit(): void {
    this.idUsuario = this._serviceAuth.getUsuario().idUsuario;
    this.listarMuebleAsignados();
  }

  listarMuebleAsignados() {
    this._serviceMueble
      .getUsuariosAsigandosMueble(this.idUsuario)
      .subscribe(({ data }: IResponse) => {
        this.muebleAsignados = data;
      });
  }

  cargarMueble(mueble: IMuebleAsignadosResponse) {
    this.mueble = mueble;
    this.getUsuariosAsignadosMueble();
    this.getMateriaPrimaAsignadosMueble();
  }

  getUsuariosAsignadosMueble() {
    this._serviceMueble
      .getUsuariosAsignadosMueble(this.mueble.idMueble)
      .subscribe(({ data }: IResponse) => {
        this.usuarios = data;
      });
  }

  getMateriaPrimaAsignadosMueble() {
    this._serviceMueble
      .getMateriaPrimaAsignadosMueble(this.mueble.idMueble)
      .subscribe(({ data }: IResponse) => {
        this.materiasPrimas = data;
      });
  }

  finalizarMuebleAsignado() {
    this._serviceMueble
      .putFinalizarMueble(this.idUsuario, this.mueble.idMueble)
      .subscribe((response: IResponse) => {
        this.listarMuebleAsignados();
        if (response.error == 400) {
          this._serviceMensajes.errorMessage(
            'Error',
            'No fue poible finalizar el mueble',
            ''
          );
        } else {
          this._serviceMensajes.successMessage(
            'OK',
            'Mueble finalizado con exito '
          );
        }
      });
  }
}
