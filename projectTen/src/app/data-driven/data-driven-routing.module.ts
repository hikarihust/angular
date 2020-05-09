import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { ProfileComponent } from "./components/profile.component";

const templateDrivenRoute: Routes = [
 	{ path: 'data-driven', component: ProfileComponent } 	
];


@NgModule({
	imports: [
		RouterModule.forChild(templateDrivenRoute)
	],
	exports: [
		RouterModule
	]
})
export class DataDrivenRoutingModule {}
