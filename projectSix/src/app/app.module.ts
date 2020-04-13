import { NgModule,  }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';

// StructuralComponent
import { StructuralComponent } from './structural/structural.component';

// Unless
import { UnlessComponent } from './directive-unless/unless.component';
import { UnlessDirective } from './directive-unless/unless.directive';

@NgModule({
  imports:      [ BrowserModule],
  declarations: [
    AppComponent,
    StructuralComponent,
    UnlessComponent,
    UnlessDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
