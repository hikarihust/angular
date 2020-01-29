import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'proj-style',
	templateUrl: 'style.component.html'
})

export class StyleComponent {
  textDemo: string = "";

	constructor() {
		this.textDemo = "Angular 2x is not difficult";
	}
}
