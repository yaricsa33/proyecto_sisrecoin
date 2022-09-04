import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/dashboard/servicios/mensajes.service';
import { DatePipe } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IMueble } from 'src/app/dashboard/interfaces/mueble.interface';
import { NgxSpinnerService } from 'ngx-spinner';
import { MuebleService } from 'src/app/dashboard/servicios/mueble.service';
import { IUsuario } from 'src/app/dashboard/interfaces/usuario.interface';
import { UsuarioService } from 'src/app/dashboard/servicios/usuario.service';
import { ThisReceiver } from '@angular/compiler';
import { IResponse } from 'src/app/dashboard/interfaces/response.interface';
import { IUsuarioResponse } from 'src/app/dashboard/interfaces/response/usuario-response.interface';
import { MateriaPrimaService } from 'src/app/dashboard/servicios/materiaPrima.service';
import { IMateriaPrima } from 'src/app/dashboard/interfaces/materiaPrima.interface';
import { IMateriaPrimaResponse } from 'src/app/dashboard/interfaces/response/materia-prima-response.interface';
import { AutenticacionService } from 'src/app/dashboard/servicios/autenticacion.service';

@Component({
  selector: 'app-mueble-crear',
  templateUrl: './mueble-crear.component.html',
  styleUrls: ['./mueble-crear.component.css'],
})
export class MuebleCrearComponent implements OnInit {
  nombreTitulo: string = 'Crear mueble';
  formMueble: FormGroup = new FormGroup({});
  id: number;
  validaciones = false;
  usuarios: IUsuarioResponse[] = [];
  materiasPrimas: IMateriaPrimaResponse[] = [];
  usuariosSeleccionados: IUsuarioResponse[] = [];
  materiasPrimasSeleccionados: IMateriaPrimaResponse[] = [];
  idUsuario: number;
  constructor(
    private formBuilder: FormBuilder,
    private _serviceMueble: MuebleService,
    private _serviceMateriaPrima: MateriaPrimaService,
    private _serviceUsuario: UsuarioService,
    private _serviceMensajes: MensajesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private spinner: NgxSpinnerService,
    private _serviceAutenticacion: AutenticacionService
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.id) {
      this.nombreTitulo = 'Editar Mueble';
      this.getMueblePorId(this.id);
    } else {
      this.nombreTitulo = 'Crear Mueble';
    }

    this.idUsuario = this._serviceAutenticacion.getUsuario().idUsuario;
    this.crearFormulario();
    this.getUsuariosParaMuebles();
    this.getMateriaPrima();
  }

  getMueblePorId(id: number) {
    this.spinner.show();
    this._serviceMueble.getMuebleporId(id).subscribe(({ data }: IResponse) => {
      this.nombre.setValue(data.nombre);
      this.descripcion.setValue(data.descripcion);
      this.costoMateriaPrima.setValue(data.costoMateriaPrima);
      this.fechaEstimadaEntrega.setValue(
        this.datePipe.transform(data.fechaEstimadaEntrega, 'yyyy-MM-dd')
      );
      this.nombreCliente.setValue(data.nombreCliente);
      this.tipo.setValue(data.tipo);
      this.spinner.hide();
    });
  }

  getUsuariosAsignadosMueble(id: number) {
    this._serviceMueble
      .getUsuariosAsignadosMueble(id)
      .subscribe(({ data }: IResponse) => {
        this.usuariosSeleccionados = data;
        for (let i = 0; i < this.usuariosSeleccionados.length; i++) {
          this.usuarios.find(
            (x) => x.idUsuario == this.usuariosSeleccionados[i].idUsuario
          ).seleccionar = true;
        }
      });
  }

  getMateriaPrimaAsignadosMueble(id: number) {
    this._serviceMueble
      .getMateriaPrimaAsignadosMueble(id)
      .subscribe(({ data }: IResponse) => {
        this.materiasPrimasSeleccionados = data;
        for (let i = 0; i < this.materiasPrimasSeleccionados.length; i++) {
          this.materiasPrimas.find(
            (x) =>
              x.idMateriaPrima ==
              this.materiasPrimasSeleccionados[i].idMateriaPrima
          ).seleccionar = true;
        }
      });
  }

  getUsuariosParaMuebles() {
    this._serviceUsuario
      .getUsuariosParaMueble()
      .subscribe((response: IResponse) => {
        this.usuarios = response.data;
        if (this.id) {
          this.getUsuariosAsignadosMueble(this.id);
        }
      });
  }

  getMateriaPrima() {
    this._serviceMateriaPrima
      .getMateriaPrima()
      .subscribe((reponse: IResponse) => {
        this.materiasPrimas = reponse.data;
        if (this.id) {
          this.getMateriaPrimaAsignadosMueble(this.id);
        }
      });
  }

  crearFormulario() {
    this.formMueble = this.formBuilder.group({
      nombre: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      costoMateriaPrima: new FormControl(0, [Validators.required]),
      fechaEstimadaEntrega: new FormControl('', [Validators.required]),
      nombreCliente: new FormControl('', [Validators.required]),
    });
  }

  guardar() {
    this.spinner.show();
    this.validaciones = true;

    if (this.formMueble.invalid) {
      this.spinner.hide();
      return;
    }

    let mueble: IMueble = {
      ...this.formMueble.value,
      estado: 1,
      idUsuario: this.idUsuario,
      fechaFabricacion: this.datePipe.transform(new Date(), 'yyyy-MM-dd'),
    };
    this._serviceMueble
      .postInsertarMueble(mueble)
      .subscribe(({ data }: IResponse) => {
        let listadoMueble = {
          usuarios: [...this.usuariosSeleccionados],
          materiaPrima: [...this.materiasPrimasSeleccionados],
          idMueble: data.idMueble,
        };
        this._serviceMueble
          .postInsertarMuebleListados(listadoMueble)
          .subscribe((data) => {
            this._serviceMensajes.successMessage(
              'Ok',
              'Mueble creado con exito'
            );
            this.spinner.hide();
            this.router.navigate(['dashboard/mueble/listar']);
          });
      });
  }

  editar() {
    this.spinner.show();
    let mueble: IMueble = { ...this.formMueble.value, idMueble: this.id };
    this._serviceMueble.putActualizarMueble(mueble).subscribe((data) => {
      let listadoMueble = {
        usuarios: [...this.usuariosSeleccionados],
        materiaPrima: [...this.materiasPrimasSeleccionados],
        idMueble: this.id,
      };
      this._serviceMueble
        .postInsertarMuebleListados(listadoMueble)
        .subscribe((data) => {
          this._serviceMensajes.successMessage(
            'Ok',
            'Mueble actualizado  con exito'
          );
          this.spinner.hide();
          this.router.navigate(['dashboard/mueble/listar']);
        });
    });
  }

  seleccionarUsuarios() {
    console.log(this.usuarios);
    let usuariosS = this.usuarios.filter((x) => x.seleccionar == true);
    if (usuariosS.length > 0) {
      this.usuariosSeleccionados = usuariosS;
      this.usuariosSeleccionados = this.usuariosSeleccionados.map((data) => {
        return { ...data, valor: 0 };
      });
    } else {
      this._serviceMensajes.errorMessage(
        '',
        'Seleccione por lo menos un usuario',
        ''
      );
    }
  }

  seleccionarMateriaPrima() {
    let materiasPrimasS = this.materiasPrimas.filter(
      (x) => x.seleccionar == true
    );
    if (materiasPrimasS.length > 0) {
      this.materiasPrimasSeleccionados = materiasPrimasS;
      this.materiasPrimasSeleccionados = this.materiasPrimasSeleccionados.map(
        (data) => {
          return { ...data, unidadesDisponibles: 0 };
        }
      );
    } else {
      this._serviceMensajes.errorMessage(
        '',
        'Seleccione por lo menos una materia prima',
        ''
      );
    }
  }

  obtenerCostoMueble() {
    let sumaUsuarios = 0;
    for (let i = 0; i < this.usuariosSeleccionados.length; i++) {
      sumaUsuarios = sumaUsuarios + this.usuariosSeleccionados[i].valor;
    }

    let sumaMateria = 0;
    for (let i = 0; i < this.materiasPrimasSeleccionados.length; i++) {
      sumaMateria =
        sumaMateria +
        this.materiasPrimasSeleccionados[i].valor *
          this.materiasPrimasSeleccionados[i].unidadesDisponibles;
    }

    let total = sumaUsuarios + sumaMateria;

    this.costoMateriaPrima.setValue(total);
  }

  get nombre(): AbstractControl {
    return this.formMueble.get('nombre');
  }
  get descripcion(): AbstractControl {
    return this.formMueble.get('descripcion');
  }
  get nombreCliente(): AbstractControl {
    return this.formMueble.get('nombreCliente');
  }
  get costoMateriaPrima(): AbstractControl {
    return this.formMueble.get('costoMateriaPrima');
  }
  get fechaEstimadaEntrega(): AbstractControl {
    return this.formMueble.get('fechaEstimadaEntrega');
  }
  get tipo(): AbstractControl {
    return this.formMueble.get('tipo');
  }
  get fechaFabricacion(): AbstractControl {
    return this.formMueble.get('tipfechaFabricaciono');
  }
}
