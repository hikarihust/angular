import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Exe Three
import { CourseListComponent } from './components/course-list.component';
import { CourseComponent } from './components/course.component';
import { CourseDetailGuard } from './services/course-detail-guard.service';

import { CourseDetailDeactivateService } from './services/course-detail-deactivate.service';

const courseRoutes: Routes = [

  // Exe two
  { path: 'course/:id', component: CourseComponent, canDeactivate: [ CourseDetailDeactivateService ] },
  { path: 'courses'   , component: CourseListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(courseRoutes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
