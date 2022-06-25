import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http: HttpClient) { }

  getRol() {
    return this.http.get('http://localhost:3000/rol');
  }


  getRolPorId(id: number) {
    return this.http.get(`http://localhost:3000/rol/${id}`);
  }


  postRol(rol: any) {
    return this.http.post('http://localhost:3000/rol', rol);
  }

  putActualizarRol(rol: any) {
    return this.http.put('http://localhost:3000/rol', rol);
  }

  deleteEliminarRol(id: number) {
    return this.http.delete(`http://localhost:3000/rol/${id}`);
  }
}
