import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'zvn-one-contact',
	template: `
    <h3>Contact Page</h3>
		<a routerLink="" type="button" class="btn btn-success">Go Home</a>
		<a routerLink="/about" type="button" class="btn btn-success">Go About</a>
	`
})

export class ContactComponent implements OnInit {

	constructor(
	) {

	}

	ngOnInit() {
	}

}
