import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'zvn-widget-button',
	template: `
		<div class="panel panel-danger">
			<div class="panel-heading">
				<h3 class="panel-title">Button</h3>
			</div>
			<div class="panel-body">
				<button type="button" class="btn btn-default">Default</button>
				<button type="button" class="btn btn-primary">Primary</button>
				<button type="button" class="btn btn-success">Success</button>
				<button type="button" class="btn btn-info">Info</button>
				<button type="button" class="btn btn-warning">Warning</button>
				<button type="button" class="btn btn-danger">Danger</button>
				<button type="button" class="btn btn-link">Link</button>
			</div>
		</div>
	`
})

export class ButtonComponent implements OnInit {

	ngOnInit(){
	}

}
