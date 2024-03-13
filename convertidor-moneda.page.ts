import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor-moneda',
  templateUrl: './convertidor-moneda.page.html',
  styleUrls: ['./convertidor-moneda.page.scss'],
})
export class ConvertidorMonedaPage {
  cantidadMXN: number;
  monedaDestino: string;
  resultado: number;

  constructor() {
    this.cantidadMXN = 0;
    this.monedaDestino = 'USD'; // Por defecto, convertir a dólares
    this.resultado = 0;
  }

  convertir() {
    switch (this.monedaDestino) {
      case 'USD':
        this.resultado = this.cantidadMXN / 20; // 1 USD = 20 MXN (ejemplo)
        break;
      case 'INR':
        this.resultado = this.cantidadMXN * 1.5; // Ejemplo arbitrario para la rupia india
        break;
      case 'EUR':
        this.resultado = this.cantidadMXN / 24; // 1 EUR = 24 MXN (ejemplo)
        break;
      default:
        this.resultado = 0;
        break;
    }
  }
}