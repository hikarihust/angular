import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Module
import { SharedModule } from './shared/shared.module';
import { ElementsModule } from './elements/elements.module';
import { ZVideoModule } from './zvideo/zvideo.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular Module
    BrowserModule,
    FormsModule,
    HttpClientModule,

    // Custom Module
    SharedModule,
    ZVideoModule,
    ElementsModule,
    AdminModule,

    // Routing
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
