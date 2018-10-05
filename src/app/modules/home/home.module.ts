import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './components/home/home.component';

import { HomeService } from '../../http/home/home.service';

@NgModule({
    declarations: [HomeComponent],
    imports: [HomeRoutingModule, CommonModule],
    exports: [],
    providers: [HomeService]
})
export class HomeModule { }
