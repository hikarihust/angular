import { NgModule } from '@angular/core';


// Component
import { CourseListComponent } from "./components/course-list.component";

// Service
import { HttpService } from './services/http.service';

// Routing
import { StudyHttpRoutingModule } from './study-http-routing.module';

// SharedModule
import { SharedModule } from './../shared/shared.module';

@NgModule({
	imports: [
		SharedModule,
		StudyHttpRoutingModule,
	],
	declarations: [
		CourseListComponent,
	],
	providers: 	[ HttpService],
})

export class StudyHttpModule { }


