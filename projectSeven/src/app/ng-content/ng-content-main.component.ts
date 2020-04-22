import { Component } from '@angular/core';

@Component({
	selector: 'zvn-study-ng-content-main',
	template: `
		<div class="panel panel-info">
			<div class="panel-heading">
				<h3 class="panel-title">Study ng-content</h3>
			</div>
			<div class="panel-body">
        <zvn-ng-content-child-one>
          ABC
          <span class="glyphicon glyphicon-asterisk" aria-hidden="true"></span>
          <p>MainNumber: {{ mainNumber }}</p>
        </zvn-ng-content-child-one>
			</div>
			<div class="panel-footer">

			</div>
		</div>
	`
})

export class NgContentMainComponent   {
	mainNumber: number = 100;
}
