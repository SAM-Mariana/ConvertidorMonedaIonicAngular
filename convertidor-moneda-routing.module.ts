import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConvertidorMonedaPage } from './convertidor-moneda.page';

const routes: Routes = [
  {
    path: '',
    component: ConvertidorMonedaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConvertidorMonedaPageRoutingModule {}
