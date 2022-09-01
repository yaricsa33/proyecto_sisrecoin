import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http: HttpClient) { }

  getRol() {
    return this.http.get(`${environment.urlBackLocal}/rol`);
  }


  getRolPorId(id: number) {
    return this.http.get(`${environment.urlBackLocal}/rol/${id}`);
  }


  postRol(rol: any) {
    return this.http.post(`${environment.urlBackLocal}/rol`, rol);
  }

  putActualizarRol(rol: any) {
    return this.http.put(`${environment.urlBackLocal}/rol`, rol);
  }

  deleteEliminarRol(id: number) {
    return this.http.delete(`${environment.urlBackLocal}/rol/${id}`);
  }
}
