import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/dashboard/interfaces/usuario.interface';
import { MensajesService } from 'src/app/dashboard/servicios/mensajes.service';
import { UsuarioService } from 'src/app/dashboard/servicios/usuario.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-usuario-crear',
  templateUrl: './usuario-crear.component.html',
  styleUrls: ['./usuario-crear.component.css']
})
export class UsuarioCrearComponent implements OnInit {

  nombre: string = "";
  formUsuario: FormGroup = new FormGroup({});
  id: number;
  validaciones = false;

  constructor(
    private formBuilder: FormBuilder,
    private _serviceUsuario: UsuarioService,
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
      this.nombre = 'Editar usuario';
      this.cargarUsuario();
    } else {
      this.nombre = 'Crear usuario';
    }

    this.crearFormulario();
  }

  cargarUsuario() {

    this.spinner.show();
    this._serviceUsuario.getUsuarioPorId(this.id).subscribe((data: IUsuario) => {
      this.nombres.setValue(data.nombres);
      this.apellidos.setValue(data.apellidos);
      this.cedula.setValue(data.cedula);
      this.correo.setValue(data.correo);
      this.genero.setValue(data.genero);
      this.idRol.setValue(data.idRol);
      this.lugarNacimiento.setValue(data.lugarNacimiento);
      this.fechaIngreso.setValue(this.datePipe.transform(data.fechaIngreso, "yyyy-MM-dd"));
      this.contrasena.setValue(data.contrasena);
      this.repetirContrasena.setValue(data.contrasena);
      this.celular.setValue(data.celular);
      this.spinner.hide();
    })
  }

  crearFormulario() {


    this.formUsuario = this.formBuilder.group({
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      cedula: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      genero: new FormControl('', [Validators.required]),
      idRol: new FormControl('', [Validators.required]),
      lugarNacimiento: new FormControl('', [Validators.required]),
      fechaIngreso: new FormControl('', [Validators.required]),
      contrasena: new FormControl('', [Validators.required]),
      repetirContrasena: new FormControl('', [Validators.required]),
      celular: new FormControl('', [Validators.required])
    })
  }

  guardar() {
    this.spinner.show();
    this.validaciones = true;

    if (this.formUsuario.invalid) {
      return;
    }
    this._serviceUsuario.postUsuario(this.formUsuario.value).subscribe((data) => {
      this._serviceMensajes.successMessage('Ok', 'Usuario creado con exito');
      this.spinner.hide();
      this.router.navigate(['dashboard/usuario/listar']);
    });
  }

  editar() {
    this.spinner.show();
    this.validaciones = true;

    if (this.formUsuario.invalid) {
      return;
    }

    let usuario: IUsuario = { ...this.formUsuario.value, idUsuario: this.id };
    this._serviceUsuario.putUsuario(usuario).subscribe((data) => {
      this._serviceMensajes.successMessage('Ok', 'Usuario actualizado con exito');
      this.spinner.hide();
      this.router.navigate(['dashboard/usuario/listar']);
    });
  }

  get nombres(): AbstractControl { return this.formUsuario.get('nombres'); }
  get apellidos(): AbstractControl { return this.formUsuario.get('apellidos'); }
  get cedula(): AbstractControl { return this.formUsuario.get('cedula'); }
  get correo(): AbstractControl { return this.formUsuario.get('correo'); }
  get genero(): AbstractControl { return this.formUsuario.get('genero'); }
  get idRol(): AbstractControl { return this.formUsuario.get('idRol'); }
  get lugarNacimiento(): AbstractControl { return this.formUsuario.get('lugarNacimiento'); }
  get fechaIngreso(): AbstractControl { return this.formUsuario.get('fechaIngreso'); }
  get contrasena(): AbstractControl { return this.formUsuario.get('contrasena'); }
  get repetirContrasena(): AbstractControl { return this.formUsuario.get('repetirContrasena'); }
  get celular(): AbstractControl { return this.formUsuario.get('celular'); }

}
