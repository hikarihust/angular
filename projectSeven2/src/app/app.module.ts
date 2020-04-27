import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Hello Service
import { LogService } from './services/log.service';

// Caculator Service
import { CaculatorComponent } from './caculator-service/caculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CaculatorComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
