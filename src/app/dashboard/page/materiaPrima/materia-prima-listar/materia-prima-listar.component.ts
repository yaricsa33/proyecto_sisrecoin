import { Component, OnInit } from '@angular/core';
import { MateriaPrimaService } from 'src/app/dashboard/servicios/materiaPrima.service';
import { MensajesService } from 'src/app/dashboard/servicios/mensajes.service';
import { Router } from '@angular/router';
import { IResponse } from 'src/app/dashboard/interfaces/response.interface';

@Component({
  selector: 'app-materia-prima-listar',
  templateUrl: './materia-prima-listar.component.html',
  styleUrls: ['./materia-prima-listar.component.css']
})
export class MateriaPrimaListarComponent implements OnInit {

  nombre: string = "Listar materia prima";
  materiaPrima: any[] = [];

  constructor(
    private _serviceMateriaPrima: MateriaPrimaService,
    private serviceMensajes: MensajesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarMateriaPrima();
  }

  listarMateriaPrima() {
    this._serviceMateriaPrima.getMateriaPrima().subscribe((response: IResponse) => {
      this.materiaPrima = response.data;
    });
  }

  editar(id: number) {
    [1, 2, 3].forEach(element => {

    });
    this.router.navigate(['dashboard/materiaprima/editar', id])
  }

  eliminar(id: number) {
    this._serviceMateriaPrima.eliminarMateriaPrimaPorId(id).subscribe((data: any) => {
      this.listarMateriaPrima();
      this.serviceMensajes.successMessage('Ok', 'materia prima eliminada con exito');
    })
  }

}
