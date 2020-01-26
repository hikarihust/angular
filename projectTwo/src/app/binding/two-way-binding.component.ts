import { Component} from '@angular/core';

@Component({
	moduleId: module.id,	
	selector: 'my-two-way-binding',
	templateUrl: 'two-way-binding.component.html'
})

export class TwoWayBindingComponent {
	firstName: string = "Angular";

}
