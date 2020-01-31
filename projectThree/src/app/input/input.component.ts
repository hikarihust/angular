import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'zvn-input',
	templateUrl: './input.component.html',
	inputs: ["stitle:mtitle", "sdes: mdescription"]
})

export class InputComponent {
	// @Input("mtitle") stitle: string;
	// @Input("mdescription") sdes: string;
}
