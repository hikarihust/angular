import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { ZVideoRoutingModule } from './zvideo-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,

    // Routing
    ZVideoRoutingModule
  ],
  exports: [
  ]
})
export class ZVideoModule { }
