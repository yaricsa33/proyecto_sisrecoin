import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { RolService } from 'src/app/dashboard/servicios/rol.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IRol } from 'src/app/dashboard/interfaces/rol.interface';
import { MensajesService } from 'src/app/dashboard/servicios/mensajes.service';
import { NgxSpinnerService } from "ngx-spinner";
import { IResponse } from 'src/app/dashboard/interfaces/response.interface';



@Component({
  selector: 'app-rol-crear',
  templateUrl: './rol-crear.component.html',
  styleUrls: ['./rol-crear.component.css']
})
export class RolCrearComponent implements OnInit {

  nombres: string = "";
  formRol: FormGroup = new FormGroup({});
  id: number;
  validaciones = false;


  constructor(

    private formBuilder: FormBuilder,
    private _servicerRol: RolService,
    private _serviceMensajes: MensajesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private spinner: NgxSpinnerService

  ) {
    this.id = this.activatedRoute.snapshot.params["id"]
  }

  ngOnInit(): void {
    if (this.id) {
      this.nombres = 'Editar Rol';
      this.cargarRol();
    } else {
      this.nombres = 'Crear Rol';
    }

    this.crearFormulario();
  }

  cargarRol() {

    this.spinner.show();
    this._servicerRol.getRolPorId(this.id).subscribe(({ data }: IResponse) => {
      this.nombre.setValue(data.nombre);
      this.descripcion.setValue(data.descripcion);
      this.spinner.hide();
    })
  }

  crearFormulario() {

    this.formRol = this.formBuilder.group({

      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
    })
  }

  guardar() {
    this.validaciones = true;
    this.spinner.show();
    if (this.formRol.invalid) {
      this.spinner.hide();
      return;
    }
    this._servicerRol.postRol(this.formRol.value).subscribe((_data) => {
      this._serviceMensajes.successMessage('Ok', 'Rol creado con exito');
      this.spinner.hide();
      this.router.navigate(['dashboard/rol/listar']);
    });
  }

  editar() {

    this.validaciones = true;

    if (this.formRol.invalid) {
      return;
    }
    this.spinner.show();
    let rol: IRol = { ...this.formRol.value, idRol: this.id }; 0
    this._servicerRol.putActualizarRol(rol).subscribe((data) => {
      this._serviceMensajes.successMessage('Ok', 'Rol actualizado con exito');
      this.spinner.hide();
      this.router.navigate(['dashboard/rol/listar']);
    });
  }

  get nombre(): AbstractControl { return this.formRol.get('nombre'); }
  get descripcion(): AbstractControl { return this.formRol.get('descripcion'); }

}



