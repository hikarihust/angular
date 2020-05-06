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
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [
		SharedModule,
    FormsModule,
    HttpClientModule,
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


