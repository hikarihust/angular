import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { AdminRoutingModule } from './admin-routing.module';

// Component
import { TrainingComponent } from './components/training.component';

@NgModule({
  declarations: [
    TrainingComponent
  ],
  imports: [
    CommonModule,

    // Routing
    AdminRoutingModule
  ],
  exports: [
  ]
})
export class AdminModule { }
