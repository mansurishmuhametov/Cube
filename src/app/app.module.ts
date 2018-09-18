import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PriceModule } from './modules/price/price.module';
import { HomeModule } from './modules/home/home.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { HomeNavigationComponent } from './core/home-navigation/home-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    HomeNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PriceModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
