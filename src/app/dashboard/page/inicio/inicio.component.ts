import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { InicioService } from '../../servicios/inicio.service';
import { IResponse } from 'src/app/dashboard/interfaces/response.interface';
import { DatePipe } from '@angular/common';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  title = 'ng2-charts-demo';

  fecha: string = '';
  cantidadVentas: number = 0;
  patrimonio: number = 0;
  showPieGrafica: boolean = false;
  showBarrasGrafica: boolean = false;
  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public pieGraficaTitulos = ['ganancia', 'costo'];
  public pieChartValores = [
    {
      data: [],
    },
  ];

  //Graficas

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [''],
    datasets: [{ data: [], label: 'Pago' }],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor(
    private _inicioService: InicioService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.fecha = this.datePipe.transform(
      `${new Date().getFullYear()}-${new Date().getMonth() + 1}`,
      'yyyy-MM'
    );
    this.mostrarInformacion();
  }

  mostrarInformacion() {
    let separarFecha = this.fecha.split('-');
    let ano = separarFecha[0];
    let mes = separarFecha[1];
    this.pieChartValores[0].data = [];
    this.barChartData.labels = [];
    this.barChartData.datasets[0].data = [];
    this.showPieGrafica = false;
    this.showBarrasGrafica = false;
    this.consultaCantidadVentas(mes, ano);
    this.consultarGanancias(mes, ano);
    this.gananciaVsCosto(mes, ano);
    this.totalAPagar(mes, ano);
  }

  consultaCantidadVentas(mes: string, ano: string) {
    this._inicioService
      .getConsultaCantidadVentas(mes, ano)
      .subscribe(({ data }: IResponse) => {
        this.cantidadVentas = data.cantidadVentas || 0;
      });
  }

  consultarGanancias(mes: string, ano: string) {
    this._inicioService
      .getConsultarGanancias(mes, ano)
      .subscribe(({ data }: IResponse) => {
        this.patrimonio = data.Patrimonio || 0;
      });
  }

  gananciaVsCosto(mes: string, ano: string) {
    this._inicioService
      .getGananciaVsCosto(mes, ano)
      .subscribe(({ data }: IResponse) => {
        for (let key in data) {
          this.pieChartValores[0].data.push(data[key]);
        }
        this.showPieGrafica = true;
      });
  }

  totalAPagar(mes: string, ano: string) {
    this._inicioService
      .getTotalAPagar(mes, ano)
      .subscribe(({ data }: IResponse) => {
        for (let i = 0; i < data.length; i++) {
          this.barChartData.labels.push(data[i].NombreUsuario);
          this.barChartData.datasets[0].data.push(data[i].pagado);
        }
        this.showBarrasGrafica = true;
      });
  }
}
