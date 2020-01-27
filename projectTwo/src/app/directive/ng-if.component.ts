import { Component} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'my-ng-if',
	templateUrl: 'ng-if.component.html'
})

export class NgIfComponent {
	isShow: boolean = true;
}
