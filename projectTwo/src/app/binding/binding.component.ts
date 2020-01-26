import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
	selector: 'my-binding',
	templateUrl: './binding.component.html'
	// template: '<h3>Binding Component</h3>'
})

export class BindingComponent {
  title: string = "Binding Component 123";
  personObj: any =  {'name': 'Mr John', 'age': 20 };
  link: string = "https://angular.io/start";
  isActive : boolean = true;

	showInfo() : string {
		return this.personObj.name + " - " + this.personObj.age;
	}
	constructor() {}

}
