import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { PipeComponent } from './pipe/pipe.component';
import { CusPipeComponent } from './cus-pipe/cus-pipe.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ArrayPipe } from './pipes/array.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { CategoryPipe } from './pipes/category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    CusPipeComponent,
    CapitalizePipe,
    ArrayPipe,
    SortPipe,
    SummaryPipe,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
