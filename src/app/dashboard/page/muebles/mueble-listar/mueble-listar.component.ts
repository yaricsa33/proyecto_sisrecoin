import { Component, OnInit } from '@angular/core';
import { MuebleService } from 'src/app/dashboard/servicios/mueble.service';
import { MensajesService } from 'src/app/dashboard/servicios/mensajes.service';
import { Router } from '@angular/router';
import { IResponse } from 'src/app/dashboard/interfaces/response.interface';

@Component({
  selector: 'app-mueble-listar',
  templateUrl: './mueble-listar.component.html',
  styleUrls: ['./mueble-listar.component.css']
})
export class MuebleListarComponent implements OnInit {

  nombreTitulo: string = "Listar muebles";
  mueble: any[] = [];

  constructor(

    private _serviceMueble: MuebleService,
    private _serviceMensaje: MensajesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarMueble();
  }


  listarMueble() {
    this._serviceMueble.getBuscarMueble().subscribe((response: IResponse) => {
      this.mueble = response.data;
    });
  }

  editar(id: number) {
    this.router.navigate(['dashboard/mueble/editar', id]);
  }

  eliminar(id: number) {
    this._serviceMueble.deleteActualizarMueble(id).subscribe((data: any) => {
      this.listarMueble();
      this._serviceMensaje.successMessage('Ok', 'mueble eliminado con exito');
    })
  }


}

