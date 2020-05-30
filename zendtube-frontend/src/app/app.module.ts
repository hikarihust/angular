import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Module
import { SharedModule } from './shared/shared.module';
import { ElementsModule } from './elements/elements.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
