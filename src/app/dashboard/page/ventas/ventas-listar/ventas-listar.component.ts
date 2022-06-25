import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IResponse } from 'src/app/dashboard/interfaces/response.interface';
import { IVenta } from 'src/app/dashboard/interfaces/venta.interface';
import { MensajesService } from 'src/app/dashboard/servicios/mensajes.service';
import { VentaService } from 'src/app/dashboard/servicios/venta.service';

@Component({
  selector: 'app-ventas-listar',
  templateUrl: './ventas-listar.component.html',
  styleUrls: ['./ventas-listar.component.css']
})
export class VentasListarComponent implements OnInit {

  nombre: string = "Listar ventas";
  ventas: IVenta[] = [];
  constructor(

    private _serviceVenta: VentaService,
    private router: Router,
    private _serviceMensaje: MensajesService

  ) {

  }
  ngOnInit(): void {
    this.listarVenta();
  }

  listarVenta() {
    this._serviceVenta.getVenta().subscribe((response: IResponse) => {
      this.ventas = response.data;
    })
  }

  eliminar(id: number) {
    this._serviceVenta.deleteEliminarVenta(id).subscribe((response: IResponse) => {
      if (response.error == 200) {
        this.listarVenta();
        this._serviceMensaje.successMessage('Ok', 'Venta eliminado con exito');
      } else {
        this._serviceMensaje.errorMessage('Error', 'error', 'Error al eliminar la venta');
      }
    });
  }

  editar(id: number) {
    this.router.navigate(['dashboard/venta/editar', id]);
  }


}
