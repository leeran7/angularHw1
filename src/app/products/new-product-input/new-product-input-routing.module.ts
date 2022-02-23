import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewProductInputPage } from './new-product-input.page';

const routes: Routes = [
  {
    path: '',
    component: NewProductInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewProductInputPageRoutingModule {}
