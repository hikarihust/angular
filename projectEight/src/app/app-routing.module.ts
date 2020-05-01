import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './exe-one/home.component';
import { AboutComponent } from './exe-one/about.component';
import { ContactComponent } from './exe-one/contact.component';


const routes: Routes = [
  { path: ''          , component: HomeComponent },
  { path: 'about'     , component: AboutComponent },
  { path: 'contact'   , component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
