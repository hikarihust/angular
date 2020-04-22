import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'zvn-ng-content-child-two',
	template: `
		<div style="background-color: #F9FDFE; padding: 10px">
			zvn-ng-content-child-two
			<div class="alert alert-danger">
			 	<ng-content select=".abc-def"></ng-content>
			</div>

			<div class="alert alert-success">
				<ng-content select="h3"></ng-content>
      </div>

			<div class="alert alert-info">
				<ng-content select="[my-attribute]"></ng-content>
      </div>

			<div class="alert alert-info">
				<ng-content select="[my-attribute2=angular]"></ng-content>
      </div>

			<div class="alert alert-info">
				<ng-content select="[item-content][item-active]"></ng-content>
			</div>
		</div>
	`
})
export class NgContentChildTwoComponent implements OnInit {

	constructor() {}

	ngOnInit() {

	}
}
