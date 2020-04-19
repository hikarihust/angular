import { Component, Input, OnInit, OnChanges, SimpleChange, SimpleChanges, DoCheck  } from '@angular/core';

@Component({
	selector: 'zvn-lifecycle-two',
	template: `
		<ul class="list">
			<li *ngFor="let hook of hooks">
				{{ hook }}
			</li>
		</ul>
	`
})
export class TwoComponent implements OnInit, DoCheck, OnChanges {

	hooks: string[] = [];

	@Input('value1') value1: string;
	@Input('value2') value2: string;
	@Input('value3') value3: string = "a";

	constructor() {
		this.hooks.push("constructor");
  }

  ngOnChanges(simple: SimpleChanges){
    console.log(simple);
		this.hooks.push("ngOnChanges");
	}

	ngOnInit(){
		this.hooks.push("ngOnInit");
  }

	ngDoCheck(){
		this.hooks.push("ngDoCheck");
	}
}
