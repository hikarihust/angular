import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Hightlight
import { HighlightComponent } from './directive-highlight/highlight.component';
import { HighlightDirective } from './directive-highlight/highlight.directive';

// Favorite
import { FavoriteComponent } from './directive-favorite/favorite.component';
import { FavoriteDirective } from './directive-favorite/favorite.directive';

@NgModule({
  declarations: [
    AppComponent,
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
