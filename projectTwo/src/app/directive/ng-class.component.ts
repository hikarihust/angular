import { Component} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'my-ng-class',
	templateUrl: 'ng-class.component.html'
})

export class NgClassComponent {
	isList: boolean = true;

	setClasses() {
		return {
			'glyphicon-th': !this.isList,      // false
			'glyphicon-th-list': this.isList, // true
		};
	}
}
