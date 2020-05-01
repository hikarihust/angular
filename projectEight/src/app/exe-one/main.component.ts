import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'zvn-project-one',
	template: `
  <div class="panel panel-info">
    <div class="panel-heading">
      <h3 class="panel-title">Exe One</h3>
    </div>
    <div class="panel-body">
      <router-outlet></router-outlet>
    </div>
    <div class="panel-footer">
      <a class="link"
        routerLink="/"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
        >Home</a>
      <a class="link" routerLink="/about" routerLinkActive="active">About</a>
      <a class="link" [routerLink]="['/contact']" routerLinkActive="active">Contact</a>
    </div>
  </div>
	`
})
export class MainComponent implements OnInit {
	constructor() {}

	ngOnInit() {

	}
}
