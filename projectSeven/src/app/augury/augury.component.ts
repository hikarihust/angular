import { Component, Input } from '@angular/core';

@Component({
	selector: 'zvn-augury',
	template: `
		<div class="panel panel-info">
			<div class="panel-heading">
				<h3 class="panel-title">Augury</h3>
			</div>
			<div class="panel-body">
				{{ mtitle }}
			</div>
		</div>
	`
})

export class AuguryComponent   {

	@Input("title") mtitle: string;

	constructor() {
	}
}
