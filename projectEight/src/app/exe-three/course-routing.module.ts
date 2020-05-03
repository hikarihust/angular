import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Exe Two
import { CourseListComponent } from './components/course-list.component';
import { CourseDetailComponent } from './components/course.component';
import { CourseDetailGuard } from './services/course-detail-guard.service';

const courseRoutes: Routes = [

  // Exe two
  { path: 'course/:id', component: CourseDetailComponent },
  { path: 'courses'   , component: CourseListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(courseRoutes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
