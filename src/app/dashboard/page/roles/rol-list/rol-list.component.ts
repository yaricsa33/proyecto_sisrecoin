import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MensajesService } from 'src/app/dashboard/servicios/mensajes.service';
import { RolService } from 'src/app/dashboard/servicios/rol.service';

@Component({
  selector: 'app-rol-list',
  templateUrl: './rol-list.component.html',
  styleUrls: ['./rol-list.component.css']
})
export class RolListComponent implements OnInit {

  nombre: string = "Listar rol";
  roles: any[] = [];



  constructor(
    private _serviceRol: RolService,
    private router: Router,
    private _serviceMensajes: MensajesService
  ) { }

  ngOnInit(): void {
    this.listarRoles();
  }

  listarRoles() {
    this._serviceRol.getRol().subscribe((data: any) => {
      this.roles = data;
      console.log(this.roles)
    });
  }


  eliminar(id: number) {
    this._serviceRol.deleteEliminarRol(id).subscribe((data: any) => {
      this.listarRoles();
      this._serviceMensajes.successMessage('Ok', 'Rol eliminado con exito');
    });
  }

  editar(id: number) {
    this.router.navigate(['dashboard/rol/editar', id]);
  }
}



