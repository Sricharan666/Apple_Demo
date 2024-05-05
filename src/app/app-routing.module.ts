import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path : '', component : LandingPageComponent},
  {path : 'header', component : HeaderComponent},
  {path : 'mainpage', component : LandingPageComponent},
  {path : 'footer', component : FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
