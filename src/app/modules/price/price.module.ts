import { NgModule } from '@angular/core';
import { PriceRoutingModule } from './price-routing.module';
import { PriceListComponent } from './components/price-list/price-list.component';

@NgModule({
    declarations: [PriceListComponent],
    imports: [PriceRoutingModule],
    exports: [PriceListComponent]
})
export class PriceModule {}
