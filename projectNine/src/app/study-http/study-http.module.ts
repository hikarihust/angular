import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
		SharedModule,
		StudyHttpRoutingModule,
	],
	declarations: [
		CourseListComponent,
	],
	providers: 	[ HttpService],
})

export class StudyHttpModule { }


