import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceListComponent } from './components/price-list/price-list.component';

@NgModule({
    declarations: [
        PriceListComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PriceListComponent
    ]
})
export class PriceModule {}
