import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalcularMedia } from './components/calcular-media/calcular-media';
import { Apolice } from './components/apolice/apolice';
import { ConversorTemperatura } from './components/conversor-temperatura/conversor-temperatura';
import { Imc } from './components/imc/imc';

const routes: Routes = [
  { path: '', redirectTo: 'calcular-media', pathMatch: 'full' },
  { path: 'calcular-media', component: CalcularMedia },
  { path: 'apolice', component: Apolice },
  { path: 'conversor-temperatura', component: ConversorTemperatura },
  { path: 'imc', component: Imc }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }