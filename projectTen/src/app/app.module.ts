import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TemplateDrivenModule } from './template-driven/template-driven.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsModule } from './elements/elements.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TemplateDrivenModule,
    ElementsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
