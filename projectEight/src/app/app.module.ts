import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

// Exe One
import { HomeComponent } from './exe-one/home.component';
import { AboutComponent } from './exe-one/about.component';
import { ContactComponent } from './exe-one/contact.component';
import { NotFoundComponent } from './exe-one/not-found.component';

@NgModule({
  declarations: [
    AppComponent,

    // Exe One
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
