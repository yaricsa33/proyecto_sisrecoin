import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PermisoService {

  constructor(private http: HttpClient) { }

  getPermiso() {
    return this.http.get(`${environment.urlBackLocal}/permiso`);
  }


  getPermisoPorId(id: number) {
    return this.http.get(`${environment.urlBackLocal}/permiso/${id}`);
  }


  postInsertarPermiso(permiso: any) {
    return this.http.post(`${environment.urlBackLocal}/permiso`, permiso);
  }

  putActualizarPermiso(permiso: any) {
    return this.http.put(`${environment.urlBackLocal}/permiso`, permiso);
  }

  deleteEliminarPermiso(id: number) {
    return this.http.delete(`${environment.urlBackLocal}/permiso/${id}`);
  }
}
