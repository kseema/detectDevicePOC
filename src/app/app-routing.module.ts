import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './desktop/home/home.component';
import { DonateComponent } from './desktop/donate/donate.component';
import { LoginComponent } from './desktop/login/login.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"donate",component:DonateComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
