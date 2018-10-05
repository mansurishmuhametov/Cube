import { NgModule } from '@angular/core';
import { PriceRoutingModule } from './price-routing.module';
import { PriceListComponent } from './components/price-list/price-list.component';

@NgModule({
    imports: [PriceRoutingModule],
    declarations: [PriceListComponent],
    exports: []
})
export class PriceModule { }
