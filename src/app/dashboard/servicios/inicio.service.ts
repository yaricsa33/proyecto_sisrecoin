import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InicioService {
  constructor(private http: HttpClient) {}

  getConsultaCantidadVentas(mes: string, ano: string) {
    return this.http.get(
      `${environment.urlBackLocal}/dashboard/cantidadVentas/${mes}/${ano}`
    );
  }

  getConsultarGanancias(mes: string, ano: string) {
    return this.http.get(
      `${environment.urlBackLocal}/dashboard/consultarGanancias/${mes}/${ano}`
    );
  }

  getGananciaVsCosto(mes: string, ano: string) {
    return this.http.get(
      `${environment.urlBackLocal}/dashboard/gananciaVsCosto/${mes}/${ano}`
    );
  }

  getTotalAPagar(mes: string, ano: string) {
    return this.http.get(
      `${environment.urlBackLocal}/dashboard/totalAPagar/${mes}/${ano}`
    );
  }
}
