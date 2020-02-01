import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'zvn-template',
	templateUrl: './template.component.html'
})

export class TemplateComponent {
	isShow: boolean = true;

	courses: string[] = ["typescript", "angular", "nodejs"];

	tab: string = "profile";

	changeTab(tabCurrent: string) : void {
		this.tab = tabCurrent;
	}
}
