import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get('http://localhost:3000/usuario');
  }


  getUsuarioPorId(id: number) {
    return this.http.get(`http://localhost:3000/usuario/${id}`);
  }


  postUsuario(usuario: any) {
    return this.http.post('http://localhost:3000/usuario', usuario);
  }

  putUsuario(usuario: any) {
    return this.http.put('http://localhost:3000/usuario', usuario);
  }

  deleteUsuario(id: number) {
    return this.http.delete(`http://localhost:3000/usuario/${id}`);
  }
}
