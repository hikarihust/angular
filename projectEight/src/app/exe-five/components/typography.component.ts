import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'zvn-widget-typography',
	template: `
		<div class="panel panel-warning">
			<div class="panel-heading">
				<h3 class="panel-title">Typography</h3>
			</div>
			<div class="panel-body">
				<h1>h1. Bootstrap heading</h1>
				<h2>h2. Bootstrap heading</h2>
				<h3>h3. Bootstrap heading</h3>
				<h4>h4. Bootstrap heading</h4>
				<h5>h5. Bootstrap heading</h5>
				<h6>h6. Bootstrap heading</h6>
			</div>
		</div>
	`
})

export class TypographyComponent implements OnInit {

	ngOnInit(){
	}

}
