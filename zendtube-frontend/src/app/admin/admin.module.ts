import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { AdminRoutingModule } from './admin-routing.module';

// Component
import { TrainingComponent } from './components/training.component';
import { PushDataComponent } from './components/push-data.component';

@NgModule({
  declarations: [
    TrainingComponent,
    PushDataComponent
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
