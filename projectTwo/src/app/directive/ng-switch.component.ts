import { Component} from '@angular/core';

@Component({
	selector: 'my-ng-switch',
	moduleId: module.id,
	templateUrl: 'ng-switch.component.html'
})

export class NgSwitchComponent {
	tab: string = "profile";

	changeTab(tabCurrent: string) : void {
		this.tab = tabCurrent;
	}
}
