import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { IAutenticacion } from '../interfaces/autenticacion.interface';
import { IUsuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})

export class AutenticacionService {

  constructor(private http: HttpClient) { }


  postAutenticacion(auth: IAutenticacion) {
    return this.http.post(`${environment.urlBackLocal}/autenticacion`, auth)

  }

  logout() {
    sessionStorage.removeItem('user');
  }

  getUsuario(): IUsuario {
    let user = sessionStorage.getItem('user');
    let { data } = JSON.parse(user)
    return data;
  }

}