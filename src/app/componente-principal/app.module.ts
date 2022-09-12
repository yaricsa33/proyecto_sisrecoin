import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompartidosModule } from '../compartidos/compartidos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  //TODOS LOS COMPONENTES
  declarations: [AppComponent],
  //TODAS LAS LIBRERIAS
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompartidosModule,
    DataTablesModule,
    BrowserAnimationsModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
