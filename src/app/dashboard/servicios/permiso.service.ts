import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermisoService {

  constructor(private http: HttpClient) { }

  getPermiso() {
    return this.http.get('http://localhost:3000/permiso');
  }


  getPermisoPorId(id: number) {
    return this.http.get(`http://localhost:3000/permiso/${id}`);
  }


  postInsertarPermiso(permiso: any) {
    return this.http.post('http://localhost:3000/permiso', permiso);
  }

  putActualizarPermiso(permiso: any) {
    return this.http.put('http://localhost:3000/permiso', permiso);
  }

  deleteEliminarPermiso(id: number) {
    return this.http.delete(`http://localhost:3000/permiso/${id}`);
  }
}
