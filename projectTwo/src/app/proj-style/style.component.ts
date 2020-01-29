import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'proj-style',
	templateUrl: 'style.component.html'
})

export class StyleComponent {
  textDemo: string = "";

  templateCurrent: string = "";
	backgroundColor: string = "";
	textColor: string = "";

	constructor() {
		this.textDemo = "Angular 2x is not difficult";
  }

  changeTemplate($event) {
		this.templateCurrent = $event.target.value;
  }

	changeBackgroundColor($event) {
		this.backgroundColor = $event.target.value;
	}

	changeTextColor($event) {
		this.textColor = $event.target.value;
  }

	setStyles() {
		return {
			'background-color':  this.backgroundColor,
			'color': this.textColor
		};
	}
}
