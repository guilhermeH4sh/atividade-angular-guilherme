import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { CalcularMedia } from './components/calcular-media/calcular-media';
import { Apolice } from './components/apolice/apolice';
import { ConversorTemperatura } from './components/conversor-temperatura/conversor-temperatura';
import { Imc } from './components/imc/imc';

@NgModule({
  declarations: [
    App,
    CalcularMedia,
    Apolice,
    ConversorTemperatura,
    Imc
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }