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
        <zvn-ng-content-child-two>
          <div class="abc-def">
				 		Class: .abc-def
          </div>
          <h3>Selector: H3 Element</h3>
          <div my-attribute>Attribute</div>
          <div my-attribute2="angular">Attribute with value</div>

          <div item-content item-active>Multi Attribute</div>
        </zvn-ng-content-child-two>
			</div>
			<div class="panel-footer">

			</div>
		</div>
	`
})

export class NgContentMainComponent   {
	mainNumber: number = 100;
}
