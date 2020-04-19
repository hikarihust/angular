import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// 01 Augury
// import { AuguryComponent } from './augury/augury.component';

// LifeCycle
import { MainComponent } from './life-cycle/main.component';
import { AllComponent } from './life-cycle/all.component';
import { OneComponent } from './life-cycle/one.component';

@NgModule({
  declarations: [
    AppComponent,
		// 01 Augury
    // AuguryComponent,

		// 02 LifeCycle
		MainComponent,
    AllComponent,
    OneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
