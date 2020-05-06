import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Component
import { ProfileComponent } from "./components/profile.component";

// Service
import { GithubService } from './services/github.service';

// Routing
import { GithubRoutingModule } from './github-routing.module';

// SharedModule
import { SharedModule } from './../shared/shared.module';

@NgModule({
	imports: [
		SharedModule,
		FormsModule,
		GithubRoutingModule
	],
	declarations: [ 
		ProfileComponent
	],
	providers: 	[
		GithubService
	]
})

export class GithubModule { }


