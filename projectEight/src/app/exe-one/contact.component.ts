import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'zvn-one-contact',
	template: `
    <h3>Contact Page</h3>
		<a type="button" class="btn btn-success">Go Home</a>
		<a type="button" class="btn btn-success">Go About</a>
	`
})

export class ContactComponent implements OnInit {

	constructor(
	) {

	}

	ngOnInit() {
	}

}
