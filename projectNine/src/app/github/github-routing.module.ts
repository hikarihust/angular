import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { ProfileComponent } from "./components/profile.component";

const githubRoutes: Routes = [
	{ path: 'github', component: ProfileComponent } 	
];

@NgModule({
	imports: [
		RouterModule.forChild(githubRoutes)
	],
	exports: [
		RouterModule
	]
})
export class GithubRoutingModule {}
