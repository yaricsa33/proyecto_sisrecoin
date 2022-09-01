import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) { }

  getVenta() {
    return this.http.get(`${environment.urlBackLocal}/venta`);
  }
  getVentaMueble() {
    return this.http.get(`${environment.urlBackLocal}/venta/mueblesVentas`);
  }

  getVentaPorId(id: number) {
    return this.http.get(`${environment.urlBackLocal}/venta/${id}`);
  }

  postVenta(venta: any) {
    return this.http.post(`${environment.urlBackLocal}/venta`, venta);
  }

  postInsertarVentaListados(ventaListado: any) {
    return this.http.post(`${environment.urlBackLocal}/venta/listados`, ventaListado);
  }

  putActualizarVenta(venta: any) {
    return this.http.put(`${environment.urlBackLocal}/venta`, venta);
  }

  deleteEliminarVenta(id: number) {
    return this.http.delete(`${environment.urlBackLocal}/venta/${id}`);
  }
}