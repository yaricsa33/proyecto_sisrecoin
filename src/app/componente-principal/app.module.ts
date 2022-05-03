import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompartidosModule } from '../compartidos/compartidos.module';
import { MenuComponent } from '../compartidos/menu/menu.component';
@NgModule({
  //TODOS LOS COMPONENTES
  declarations: [
    AppComponent
  ],
  //TODAS LAS LIBRERIAS
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompartidosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
