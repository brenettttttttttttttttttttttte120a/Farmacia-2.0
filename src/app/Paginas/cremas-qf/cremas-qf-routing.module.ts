import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CremasQfPage } from './cremas-qf.page';

const routes: Routes = [
  {
    path: '',
    component: CremasQfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CremasQfPageRoutingModule {}
