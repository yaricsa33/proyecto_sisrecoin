import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) { }

  getVenta() {
    return this.http.get('http://localhost:3000/venta');
  }
  getVentaMueble() {
    return this.http.get('http://localhost:3000/venta/mueblesVentas');
  }

  getVentaPorId(id: number) {
    return this.http.get(`http://localhost:3000/venta/${id}`);
  }

  postVenta(venta: any) {
    return this.http.post('http://localhost:3000/venta', venta);
  }

  postInsertarVentaListados(ventaListado: any) {
    return this.http.post('http://localhost:3000/venta/listados', ventaListado);
  }

  putActualizarVenta(venta: any) {
    return this.http.put('http://localhost:3000/venta', venta);
  }

  deleteEliminarVenta(id: number) {
    return this.http.delete(`http://localhost:3000/venta/${id}`);
  }
}