import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'zvn-widget-list',
	template: `
		<div class="panel panel-danger">
			<div class="panel-heading">
				<h3 class="panel-title">List</h3>
			</div>
			<div class="panel-body">
				<ul class="list-group">
					<li class="list-group-item">Item 1</li>
					<li class="list-group-item">Item 2</li>
					<li class="list-group-item">Item 3</li>
				</ul>
			</div>
		</div>
	`
})

export class ListComponent implements OnInit {

	ngOnInit(){
	}

}
