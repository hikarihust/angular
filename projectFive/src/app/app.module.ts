import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightComponent } from './directive-highlight/highlight.component';
import { HighlightDirective } from './directive-highlight/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
