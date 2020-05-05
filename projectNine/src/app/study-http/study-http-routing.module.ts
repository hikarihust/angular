import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { CourseListComponent } from "./components/course-list.component";

const studyHttpRoute: Routes = [
 	{ path: 'study-http', component: CourseListComponent }
];


@NgModule({
	imports: [
		RouterModule.forChild(studyHttpRoute)
	],
	exports: [
		RouterModule
	]
})
export class StudyHttpRoutingModule {}
