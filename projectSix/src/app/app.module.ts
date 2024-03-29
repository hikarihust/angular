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
import { SelectorDirective } from './directive-tab/selector.directive';
import { ContainDirective } from './directive-tab/contain.directive';
import { TabDirective } from './directive-tab/tab.directive';

@NgModule({
  imports:      [ BrowserModule],
  declarations: [
    AppComponent,
    StructuralComponent,
    UnlessComponent,
    UnlessDirective,
		DelayComponent,
    DelayDirective,
    TabComponent,
    SelectorDirective,
    ContainDirective,
    TabDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
