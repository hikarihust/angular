import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Hightlight
import { HighlightComponent } from './directive-highlight/highlight.component';
import { HighlightDirective } from './directive-highlight/highlight.directive';

// Favorite
import { FavoriteComponent } from './directive-favorite/favorite.component';
import { FavoriteDirective } from './directive-favorite/favorite.directive';

// CollapsedDirective
import { CollapsedComponent } from './directive-collapsed/collapsed.component';
import { CollapsedDirective } from './directive-collapsed/collapsed.directive';

@NgModule({
  declarations: [
    AppComponent,
    CollapsedComponent,
    CollapsedDirective,
    HighlightComponent,
    HighlightDirective,
    FavoriteComponent,
    FavoriteDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
