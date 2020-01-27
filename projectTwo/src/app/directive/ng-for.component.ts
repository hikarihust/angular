import { Component} from '@angular/core';

@Component({
	moduleId: module.id,	
	selector: 'my-ng-for',
	templateUrl: 'ng-for.component.html'
})

export class NgForComponent {
	courses: string[] = ["typescript", "angular", "nodejs"];
}