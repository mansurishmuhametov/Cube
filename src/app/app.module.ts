import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { PriceModule } from './modules/price/price.module';
import { HomeModule } from './modules/home/home.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { HomeNavigationComponent } from './core/home-navigation/home-navigation.component';
import { ContactsInfoComponent } from './shared/components/contacts-info/contacts-info.component';

import { AutoCenterService } from './http/auto-center/auto-center.service';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        NavigationComponent,
        HomeNavigationComponent,
        ContactsInfoComponent
    ],
    imports: [
        BrowserModule,
        MatIconModule,
        HttpClientModule,
        AppRoutingModule,
        PriceModule,
        HomeModule
    ],
    providers: [
        AutoCenterService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
