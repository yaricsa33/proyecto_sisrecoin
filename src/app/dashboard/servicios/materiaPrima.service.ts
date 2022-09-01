import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MateriaPrimaService {

  constructor(private http: HttpClient) { }

  getMateriaPrima() {
    return this.http.get('${environment.urlBackLocal}/materiaPrima')
  }

  eliminarMateriaPrimaPorId(id: number) {
    return this.http.delete(`${environment.urlBackLocal}/materiaPrima/${id}`);
  }

  getbuscarMateriaPrimaPorId(id: number) {
    return this.http.get(`${environment.urlBackLocal}/materiaPrima/${id}`);
  }

  postInsertarMateriaPrima(materiaPrima: any) {
    return this.http.post('${environment.urlBackLocal}/materiaPrima', materiaPrima)
  }

  putActualizarMateriaPrima(materiaPrima: any) {
    return this.http.put('${environment.urlBackLocal}/materiaPrima', materiaPrima)
  }


}

