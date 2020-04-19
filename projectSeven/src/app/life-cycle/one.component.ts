import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
	selector: 'zvn-lifecycle-one',
	template: `
		<h3>OnInit, OnDestroy</h3>
	`
})

export class OneComponent implements OnInit, OnDestroy  {

	constructor() {
		console.log("constructor");
	}

	ngOnInit() {
		console.log("ngOnInit");
	}

	ngOnDestroy(){
		console.log("ngOnDestroy");
	}
}
