import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceListComponent } from './modules/price/components/price-list/price-list.component';

const routes: Routes = [{
    path: 'price.list',
    component: PriceListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
