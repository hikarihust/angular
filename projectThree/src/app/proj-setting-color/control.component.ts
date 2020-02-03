import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'zvn-control',
	templateUrl: './control.component.html'
})

export class ControlComponent {
  componentTitle: string = "ControlComponent";
  @Input("mcolor") controlColor: string
	constructor() {}
}




