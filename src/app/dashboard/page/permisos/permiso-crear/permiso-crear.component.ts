import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { PermisoService } from 'src/app/dashboard/servicios/permiso.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IPermiso } from 'src/app/dashboard/interfaces/permiso.interface';
import { MensajesService } from 'src/app/dashboard/servicios/mensajes.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { IResponse } from 'src/app/dashboard/interfaces/response.interface';
import { RolService } from 'src/app/dashboard/servicios/rol.service';
import { IRol } from 'src/app/dashboard/interfaces/rol.interface';

@Component({
  selector: 'app-permiso-crear',
  templateUrl: './permiso-crear.component.html',
  styleUrls: ['./permiso-crear.component.css'],
})
export class PermisoCrearComponent implements OnInit {
  nombreTitulo: string = 'Crear permisos';
  formPermiso: FormGroup = new FormGroup({});
  id: number;
  validaciones: boolean = false;
  roles: IRol[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private _servicerPermiso: PermisoService,
    private _serviceMensajes: MensajesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private spinner: NgxSpinnerService,
    private _serviceRol: RolService
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.id) {
      this.nombreTitulo = 'Editar permiso';
      this.cargarPermiso();
    } else {
      this.nombreTitulo = 'Crear permiso';
    }

    this.crearFormulario();
    this.cargarRoles();
  }

  cargarPermiso() {
    this.spinner.show();
    this._servicerPermiso
      .getPermisoPorId(this.id)
      .subscribe(({ data }: IResponse) => {
        this.nombre.setValue(data.nombre);
        this.descripcion.setValue(data.descripcion);
        this.idRol.setValue(data.idRol);
        this.spinner.hide();
      });
  }
  crearFormulario() {
    this.formPermiso = this.formBuilder.group({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      idRol: new FormControl('', [Validators.required]),
      seccion: new FormControl('', [Validators.required]),
    });
  }
  cargarRoles() {
    this._serviceRol.getRol().subscribe(({ data }: IResponse) => {
      this.roles = data;
      console.log(this.roles);
    });
  }
  guardar() {
    this.validaciones = true;
    this.spinner.show();
    if (this.formPermiso.invalid) {
      this.spinner.hide();
      return;
    }

    this._servicerPermiso
      .postInsertarPermiso(this.formPermiso.value)
      .subscribe((_data) => {
        this._serviceMensajes.successMessage('Ok', 'Permiso creado con exito');
        this.spinner.hide();
        this.router.navigate(['dashboard/permiso/listar']);
      });
  }

  editar() {
    this.validaciones = true;

    if (this.formPermiso.invalid) {
      return;
    }
    this.spinner.show();
    let permiso: IPermiso = { ...this.formPermiso.value, idPermiso: this.id };
    this._servicerPermiso.putActualizarPermiso(permiso).subscribe((data) => {
      this._serviceMensajes.successMessage(
        'Ok',
        'Permiso actualizado con exito'
      );
      this.spinner.hide();
      this.router.navigate(['dashboard/permiso/listar']);
    });
  }

  get nombre(): AbstractControl {
    return this.formPermiso.get('nombre');
  }
  get descripcion(): AbstractControl {
    return this.formPermiso.get('descripcion');
  }
  get idRol(): AbstractControl {
    return this.formPermiso.get('idRol');
  }
  get seccion(): AbstractControl {
    return this.formPermiso.get('seccion');
  }
}
