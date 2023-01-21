import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfumesQfPage } from './perfumes-qf.page';

const routes: Routes = [
  {
    path: '',
    component: PerfumesQfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfumesQfPageRoutingModule {}
