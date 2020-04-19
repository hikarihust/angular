import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// 01 Augury
import { AuguryComponent } from './augury/augury.component';

@NgModule({
  declarations: [
    AppComponent,
		// 01 Augury
		AuguryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
