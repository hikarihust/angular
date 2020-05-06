import { Component, OnInit } from '@angular/core';

// Service
import { GithubService } from './../services/github.service';

@Component({
	selector: 'zvn-profile-detail',
	templateUrl: './../templates/profile.component.html'
})

export class ProfileComponent implements OnInit {
	profile: any;
  repos: any;
  errorMessage: string;
	username: string;
	flagDisabled: boolean = true;
	constructor(
    private _githubService: GithubService
	) {

	}

	ngOnInit(){
	}

	setActiveButton(){
    this.flagDisabled = true;
    if(this.username.length >= 5) this.flagDisabled = false;
	}

	loadUser(){
    this._githubService.setUsername(this.username);

    this._githubService.getUser().subscribe(
      (data: any) => this.profile = data,
      (error: any) =>  this.errorMessage = error
    );

    this._githubService.getRepos().subscribe(
      (data: any) => this.repos = data,
      (error: any) =>  this.errorMessage = error
    );
	}
}
