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

@Component({
  selector: 'app-muebles-asignados-listar',
  templateUrl: './muebles-asignados-listar.component.html',
  styleUrls: ['./muebles-asignados-listar.component.css'],
})
export class MueblesAsignadosListarComponent implements OnInit {
  nombreTitulo: string = 'Solicitud de fabricacion ';
  mueble: any[] = [];
  formMueble: FormGroup = new FormGroup({});
  id: number;
  constructor(
    private _serviceMueble: MuebleService,
    private router: Router,
    private datePipe: DatePipe,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getMueblePorId(this.id);
  }

  listarMuebleAsignados() {
    this._serviceMueble.getBuscarMueble().subscribe((response: IResponse) => {
      this.mueble = response.data;
    });
  }

  getMueblePorId(id: number) {
    this._serviceMueble.getMuebleporId(id).subscribe(({ data }: IResponse) => {
      this.nombre.setValue(data.nombre);
      this.descripcion.setValue(data.descripcion);
      this.costoMateriaPrima.setValue(data.costoMateriaPrima);
      this.fechaEstimadaEntrega.setValue(
        this.datePipe.transform(data.fechaEstimadaEntrega, 'yyyy-MM-dd')
      );
      this.nombreCliente.setValue(data.nombreCliente);
      this.tipo.setValue(data.tipo);
    });
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
