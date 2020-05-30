import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { TrainingComponent } from './components/training.component';

const defineRoutes: Routes = [
  // Home Page /
  {path: 'training', component: TrainingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(defineRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
