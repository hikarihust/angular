import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { CourseListComponent } from "./components/course-list.component";

const courseFormRoute: Routes = [
  { path: 'course-form', component: CourseListComponent }
];


@NgModule({
	imports: [
		RouterModule.forChild(courseFormRoute)
	],
	exports: [
		RouterModule
	]
})
export class CourseFormRoutingModule {}
