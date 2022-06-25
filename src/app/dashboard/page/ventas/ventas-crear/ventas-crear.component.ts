import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { IMueble } from 'src/app/dashboard/interfaces/mueble.interface';
import { IResponse } from 'src/app/dashboard/interfaces/response.interface';
import { IMuebleResponse } from 'src/app/dashboard/interfaces/response/mueble-response.interface';
import { MensajesService } from 'src/app/dashboard/servicios/mensajes.service';
import { VentaService } from 'src/app/dashboard/servicios/venta.service';

@Component({
  selector: 'app-ventas-crear',
  templateUrl: './ventas-crear.component.html',
  styleUrls: ['./ventas-crear.component.css']
})
export class VentasCrearComponent implements OnInit {

  nombre: string = "Crear ventas";
  formVenta: FormGroup = new FormGroup({});
  id: number;
  validaciones = false;
  muebles: IMuebleResponse[] = [];
  muebleSeleccionados: IMuebleResponse[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private _serviceVenta: VentaService,
    private _serviceMensaje: MensajesService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.traerMuebles();
  }


  traerMuebles() {
    this._serviceVenta.getVentaMueble().subscribe((response: IResponse) => {
      this.muebles = response.data;
    })
  }

  crearFormulario() {
    this.formVenta = this.formBuilder.group({
      nombreCliente: new FormControl('', [Validators.required]),
      fechaEntrega: new FormControl('', [Validators.required]),
      valorFinal: new FormControl(0, [Validators.required]),
      idFactura: new FormControl('', [Validators.required, Validators.email]),
      fotoFactura: new FormControl('', [Validators.required]),
    })
  }

  seleccionarMueble() {
    let muebleS = this.muebles.filter(x => x.seleccionar == true);
    if (muebleS.length > 0) {
      this.muebleSeleccionados = muebleS;
      this.muebleSeleccionados = this.muebleSeleccionados.map(data => {
        return { ...data, valor: 0 }
      })
      console.log(this.muebleSeleccionados)
    } else {
      this._serviceMensaje.errorMessage('', 'Seleccione por lo menos un usuario', '');
    }
  }

  guardar() {
    this.spinner.show();
    this._serviceVenta.postVenta(this.formVenta.value).subscribe(({ data }: IResponse) => {
      let venta = {
        muebles: this.muebleSeleccionados,
        idVenta: data.idVenta
      }
      this._serviceVenta.postInsertarVentaListados(venta).subscribe(data => {
        this._serviceMensaje.successMessage('Ok', 'Venta creada  con exito');
        this.spinner.hide();
        this.router.navigate(['dashboard/venta/listar']);
      })

    })
  }

  obtenerCostoMueble() {
    let sumaUsuarios = 0;
    for (let i = 0; i < this.muebleSeleccionados.length; i++) {
      sumaUsuarios = sumaUsuarios + this.muebleSeleccionados[i].valor;
    }


    this.valorFinal.setValue(sumaUsuarios);
  }


  get nombreCliente(): AbstractControl { return this.formVenta.get('nombreCliente'); }
  get fechaEntrega(): AbstractControl { return this.formVenta.get('fechaEntrega'); }
  get valorFinal(): AbstractControl { return this.formVenta.get('valorFinal'); }
  get idFactura(): AbstractControl { return this.formVenta.get('idFactura'); }
  get fotoFactura(): AbstractControl { return this.formVenta.get('fotoFactura'); }

}
