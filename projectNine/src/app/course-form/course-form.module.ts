import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Component
import { CourseListComponent } from "./components/course-list.component";

// Service
import { CourseService } from './services/course.service';

// Routing
import { CourseFormRoutingModule } from './course-form-routing.module';

// SharedModule
import { SharedModule } from '../shared/shared.module';

@NgModule({
	imports: [
    HttpClientModule,
		SharedModule,
		CourseFormRoutingModule,
	],
	declarations: [
		CourseListComponent,
	],
	providers: 	[ CourseService],
})

export class CourseFormModule { }


