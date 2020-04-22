import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'zvn-ng-content-child-one',
	template: `
		<div style="background-color: #FAFACC; padding: 10px">
      zvn-ng-content-child-one
      <h3>
        <ng-content></ng-content>
      </h3>
		</div>
	`
})
export class NgContentChildOneComponent implements OnInit {
	childNumber: number = 200;

	constructor() {}

	ngOnInit() {

	}
}
