import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Exe Four
import { CourseListComponent } from './components/course-list.component';
import { CourseComponent } from './components/course.component';

const courseRoutes: Routes = [

  // Exe Four
  { path: 'course/:id', component: CourseComponent },
  { path: 'courses'   , component: CourseListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(courseRoutes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
