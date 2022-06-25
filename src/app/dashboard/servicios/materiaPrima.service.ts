import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MateriaPrimaService {

  constructor(private http: HttpClient) { }

  getMateriaPrima() {
    return this.http.get('http://localhost:3000/materiaPrima')
  }

  eliminarMateriaPrimaPorId(id: number) {
    return this.http.delete(`http://localhost:3000/materiaPrima/${id}`);
  }

  getbuscarMateriaPrimaPorId(id: number) {
    return this.http.get(`http://localhost:3000/materiaPrima/${id}`);
  }

  postInsertarMateriaPrima(materiaPrima: any) {
    return this.http.post('http://localhost:3000/materiaPrima', materiaPrima)
  }

  putActualizarMateriaPrima(materiaPrima: any) {
    return this.http.put('http://localhost:3000/materiaPrima', materiaPrima)
  }


}

