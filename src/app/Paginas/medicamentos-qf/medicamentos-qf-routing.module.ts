import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentosQfPage } from './medicamentos-qf.page';

const routes: Routes = [
  {
    path: '',
    component: MedicamentosQfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicamentosQfPageRoutingModule {}
