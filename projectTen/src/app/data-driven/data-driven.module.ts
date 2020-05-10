import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Component
import { ProfileComponent } from "./components/profile.component";
import { ControlMessageComponent } from './components/control-message.component';

// Service
// import { CourseService } from './services/course.service';

// Routing
import { DataDrivenRoutingModule } from './data-driven-routing.module';

// SharedModule
import { SharedModule } from './../shared/shared.module';

@NgModule({
	imports: [
    SharedModule,
    ReactiveFormsModule,
		DataDrivenRoutingModule,
		HttpClientModule
	],
	declarations: [
    ProfileComponent,
    ControlMessageComponent
	],
	// providers: 	[ CourseService],
})

export class DataDrivenModule { }


