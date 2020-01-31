import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'zvn-variable',
	templateUrl: './variable.component.html'
})

export class VariableComponent {
	callPhone(value: string): void {
		console.log(value);
  }
	callFax(value: string): void {
		console.log(value);
	}
}
