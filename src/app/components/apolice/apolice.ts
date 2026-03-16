import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  standalone: false,
  templateUrl: './apolice.html',
  styleUrl: './apolice.css',
})
export class Apolice {
  nome: string = '';
  sexo: string = '';
  idade: number = 0;
  valorAutomovel: number = 0;

  valorApolice: number = 0;

  calcularApolice() {
    if (this.sexo === 'Masculino' && this.idade <= 25) {
      this.valorApolice = this.valorAutomovel * 0.15;
    } else if (this.sexo === 'Masculino' && this.idade > 25) {
      this.valorApolice = this.valorAutomovel * 0.10;
    } else if (this.sexo === 'Feminino') {
      this.valorApolice = this.valorAutomovel * 0.08;
    } else {
      this.valorApolice = 0;
    }
  }
}