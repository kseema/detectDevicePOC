import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GlobalsService } from './app.globals';
import { HomeComponent } from './desktop/home/home.component';
import { HomeMobileComponent } from './mobile/home-mobile/home-mobile.component';
import { DonateMobileComponent } from './mobile/donate-mobile/donate-mobile.component';
import { DonateComponent } from './desktop/donate/donate.component';
import { LoginComponent } from './desktop/login/login.component';
import { LoginMobileComponent } from './mobile/login-mobile/login-mobile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeMobileComponent,
    DonateMobileComponent,
    DonateComponent,
    LoginComponent,
    LoginMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GlobalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
