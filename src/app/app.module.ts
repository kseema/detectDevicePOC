import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GlobalsService } from './app.globals';
import { HomeComponent } from './desktop/home/home.component';
import { HomeMobileComponent } from './mobile/home-mobile/home-mobile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GlobalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
