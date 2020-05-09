import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Component
import { ProfileComponent } from './components/profile.component';

// Routing
import { TemplateDrivenRoutingModule } from './template-driven-routing.module';

// SharedModule
import { SharedModule } from './../shared/shared.module';

@NgModule({
	imports: [
		SharedModule,
		TemplateDrivenRoutingModule,
		HttpClientModule
	],
	declarations: [
		ProfileComponent,
	],
	// providers: 	[ CourseService],
})

export class TemplateDrivenModule { }


