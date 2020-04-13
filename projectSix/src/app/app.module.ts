import { NgModule,  }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';

// StructuralComponent
import { StructuralComponent } from './structural/structural.component';

@NgModule({
  imports:      [ BrowserModule],
  declarations: [
    AppComponent,
    StructuralComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
