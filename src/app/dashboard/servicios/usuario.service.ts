import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(`${environment.urlBackLocal}/usuario`);
  }

  getUsuariosParaMueble() {
    return this.http.get(`${environment.urlBackLocal}/usuario/muebles`);
  }

  getUsuarioPorId(id: number) {
    return this.http.get(`${environment.urlBackLocal}/usuario/${id}`);
  }


  postUsuario(usuario: any) {
    return this.http.post(`${environment.urlBackLocal}/usuario`, usuario);
  }

  putUsuario(usuario: any) {
    return this.http.put(`${environment.urlBackLocal}/usuario`, usuario);
  }

  deleteUsuario(id: number) {
    return this.http.delete(`${environment.urlBackLocal}/usuario/${id}`);
  }


}
