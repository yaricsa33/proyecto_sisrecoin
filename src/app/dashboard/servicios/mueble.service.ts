import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MuebleService {

  constructor(private http: HttpClient) { }

  getBuscarMueble() {
    return this.http.get('http://localhost:3000/mueble')
  }

  getMuebleporId(id: number) {
    return this.http.get(`http://localhost:3000/mueble/${id}`)
  }

  getUsuariosAsignadosMueble(id: number) {
    return this.http.get(`http://localhost:3000/mueble/usuariosAsigandosMueble/${id}`)
  }

  getMateriaPrimaAsignadosMueble(id: number) {
    return this.http.get(`http://localhost:3000/mueble/materiasPrimasAsigandosMueble/${id}`)
  }

  postInsertarMueble(mueble: any) {
    return this.http.post('http://localhost:3000/mueble', mueble);
  }

  postInsertarMuebleListados(muebleListado: any) {
    return this.http.post('http://localhost:3000/mueble/listados', muebleListado);
  }

  putActualizarMueble(mueble: any) {
    return this.http.put('http://localhost:3000/mueble', mueble);
  }

  deleteActualizarMueble(id: number) {
    return this.http.delete(`http://localhost:3000/mueble/${id}`);
  }
}