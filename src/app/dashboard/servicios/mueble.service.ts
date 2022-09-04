import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MuebleService {

  constructor(private http: HttpClient) { }

  getBuscarMueble() {
    return this.http.get(`${environment.urlBackLocal}/mueble`)
  }

  getMuebleporId(id: number) {
    return this.http.get(`${environment.urlBackLocal}/mueble/${id}`)
  }

  getUsuariosAsignadosMueble(id: number) {
    return this.http.get(`${environment.urlBackLocal}/mueble/usuariosAsigandosMueble/${id}`)
  }

  getMateriaPrimaAsignadosMueble(id: number) {
    return this.http.get(`${environment.urlBackLocal}/mueble/materiasPrimasAsigandosMueble/${id}`)
  }

  postInsertarMueble(mueble: any) {
    return this.http.post(`${environment.urlBackLocal}/mueble`, mueble);
  }

  postInsertarMuebleListados(muebleListado: any) {
    return this.http.post(`${environment.urlBackLocal}/mueble/listados`, muebleListado);
  }

  putActualizarMueble(mueble: any) {
    return this.http.put(`${environment.urlBackLocal}/mueble`, mueble);
  }

  deleteActualizarMueble(id: number) {
    return this.http.delete(`${environment.urlBackLocal}/mueble/${id}`);
  }
}