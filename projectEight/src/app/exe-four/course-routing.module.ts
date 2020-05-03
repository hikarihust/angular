import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Exe Four
import { CourseListComponent } from './components/course-list.component';
import { CourseComponent } from './components/course.component';
import { CourseDetailComponent } from './components/course-detail.component';
import { CourseEditComponent } from './components/course-edit.component';
import { CourseDeleteComponent } from './components/course-delete.component';

const courseRoutes: Routes = [

  // Exe Four
  {
    path: 'course/:id',
    component: CourseComponent,
    children: [
			{ path: ''		  , redirectTo: 'detail', pathMatch: 'full' },
			{ path: 'detail', component: CourseDetailComponent },
			{ path: 'edit'	, component: CourseEditComponent },
			{ path: 'delete', component: CourseDeleteComponent }
    ]
  },
  { path: 'courses'   , component: CourseListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(courseRoutes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
