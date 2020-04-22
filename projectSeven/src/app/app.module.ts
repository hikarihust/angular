import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// 01 Augury
// import { AuguryComponent } from './augury/augury.component';

// LifeCycle
import { MainComponent } from './life-cycle/main.component';
import { AllComponent } from './life-cycle/all.component';
import { OneComponent } from './life-cycle/one.component';
import { TwoComponent } from './life-cycle/two.component';

// Study NgContent
import { NgContentMainComponent } from './ng-content/ng-content-main.component';
import { NgContentChildOneComponent } from './ng-content/ng-content-child-one.component';
import { NgContentChildTwoComponent } from './ng-content/ng-content-child-two.component';

@NgModule({
  declarations: [
    AppComponent,
		// 01 Augury
    // AuguryComponent,

		// 02 LifeCycle
		MainComponent,
    // AllComponent,
    OneComponent,
    TwoComponent,
    // NgContent
    NgContentMainComponent,
    NgContentChildOneComponent,
    NgContentChildTwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
