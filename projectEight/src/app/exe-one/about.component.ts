import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'zvn-one-about',
	template: `
    <h3>About Page</h3>
		<button (click)="goHome()" type="button" class="btn btn-danger">Go Home</button>
		<button (click)="goContact()" type="button" class="btn btn-danger">Go Contact</button>
	`
})

export class AboutComponent {
	constructor(
    private router: Router
	) {

	}

	goHome(){
		this.router.navigate(['/']);
  }

	goContact(){
		this.router.navigate(['/contact']);
	}
}
