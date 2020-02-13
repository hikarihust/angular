import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'zvn-highlight',
	templateUrl: './highlight.component.html'
})

export class HighlightComponent {

	color: string = "#000804";

	constructor() {}

	changeColor(value: string) {
		this.color = value;
	}
}




