import { NgModule,  }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';

// StructuralComponent
import { StructuralComponent } from './structural/structural.component';

// Unless
import { UnlessComponent } from './directive-unless/unless.component';
import { UnlessDirective } from './directive-unless/unless.directive';

// Delay
import { DelayComponent } from './directive-delay/delay.component';
import { DelayDirective } from './directive-delay/delay.directive';

// TabDirective
import { TabComponent } from './directive-tab/tab.component';

@NgModule({
  imports:      [ BrowserModule],
  declarations: [
    AppComponent,
    StructuralComponent,
    UnlessComponent,
    UnlessDirective,
		DelayComponent,
    DelayDirective,
    TabComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
