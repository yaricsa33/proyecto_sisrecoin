import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IMateriaPrima } from 'src/app/dashboard/interfaces/materiaPrima.interface';
import { MensajesService } from 'src/app/dashboard/servicios/mensajes.service';
import { MateriaPrimaService } from 'src/app/dashboard/servicios/materiaPrima.service';
import { NgxSpinnerService } from "ngx-spinner";
import { IResponse } from 'src/app/dashboard/interfaces/response.interface';


@Component({
  selector: 'app-materia-prima-crear',
  templateUrl: './materia-prima-crear.component.html',
  styleUrls: ['./materia-prima-crear.component.css']
})
export class MateriaPrimaCrearComponent implements OnI

















nit {

  nombreTitulo: string = "";
  formMateriaPrima: FormGroup = new FormGroup({});
  id: number;
  validaciones = false;

  constructor(
    private formBuilder: FormBuilder,
    private _serviceMateriaPrima: MateriaPrimaService,
    private _serviceMensajes: MensajesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {
    this.id = this.activatedRoute.snapshot.params["id"]
  }

  ngOnInit(): void {
    if (this.id) {
      this.nombreTitulo = 'Editar materia prima';
      this.cargarMateriaPrima();
    } else {
      this.nombreTitulo = 'Crear materia prima';
    }

    this.crearFormulario();
  }



  crearFormulario() {
    this.formMateriaPrima = this.formBuilder.group({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      unidades: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required])
    })
  }

  cargarMateriaPrima() {

    this.spinner.show();
    this._serviceMateriaPrima.getbuscarMateriaPrimaPorId(this.id).subscribe(({ data }: IResponse) => {
      this.nombre.setValue(data.nombre);
      this.descripcion.setValue(data.descripcion);
      this.unidades.setValue(data.unidades);
      this.valor.setValue(data.valor);
      this.spinner.hide();
    })
  }

  guardar() {
    this.spinner.show();
    this.validaciones = true;

    if (this.formMateriaPrima.invalid) {
      this.spinner.hide();
      return;
    }
    this._serviceMateriaPrima.postInsertarMateriaPrima(this.formMateriaPrima.value).subscribe((data) => {
      this._serviceMensajes.successMessage('Ok', 'Materia prima creada  con exito');
      this.spinner.hide();
      this.router.navigate(['dashboard/materiaprima/listar']);
    });
  }


  editar() {
    this.spinner.show();
    this.validaciones = true;

    if (this.formMateriaPrima.invalid) {
      return;
    }

    let materiaPrima: IMateriaPrima = { ...this.formMateriaPrima.value, idMateriaPrima: this.id };
    this._serviceMateriaPrima.putActualizarMateriaPrima(materiaPrima).subscribe((data) => {
      this._serviceMensajes.successMessage('Ok', 'Materia prima actualizado con exito');
      this.spinner.hide();
      this.router.navigate(['dashboard/materiaprima/listar']);
    });
  }


  get nombre(): AbstractControl { return this.formMateriaPrima.get('nombre'); }
  get descripcion(): AbstractControl { return this.formMateriaPrima.get('descripcion'); }
  get unidades(): AbstractControl { return this.formMateriaPrima.get('unidades'); }
  get valor(): AbstractControl { return this.formMateriaPrima.get('valor'); }
}
