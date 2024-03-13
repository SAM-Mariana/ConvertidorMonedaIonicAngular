import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConvertidorMonedaPageRoutingModule } from './convertidor-moneda-routing.module';

import { ConvertidorMonedaPage } from './convertidor-moneda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConvertidorMonedaPageRoutingModule
  ],
  declarations: [ConvertidorMonedaPage]
})
export class ConvertidorMonedaPageModule {}
