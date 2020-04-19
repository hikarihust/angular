import { Component } from '@angular/core';

@Component({
	selector: 'zvn-lifecycle',
	template: `
		<div class="panel panel-info">
			<div class="panel-heading">
				<h3 class="panel-title">LifeCycleHook</h3>
			</div>
			<div class="panel-body">
				<zvn-lifecycle-all></zvn-lifecycle-all>
			</div>
		</div>
	`
})

export class MainComponent   {
	constructor() {
	}
}
