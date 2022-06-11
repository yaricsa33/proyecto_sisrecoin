import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompartidosModule } from '../compartidos/compartidos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  //TODOS LOS COMPONENTES
  declarations: [
    AppComponent
  ],
  //TODAS LAS LIBRERIAS
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompartidosModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
