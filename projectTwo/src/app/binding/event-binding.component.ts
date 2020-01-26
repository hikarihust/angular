import { Component } from '@angular/core';
declare var jQuery:any;

@Component({
	moduleId: module.id,
	selector: 'my-event-binding',
	templateUrl: './event-binding.component.html'
})

export class EventBindingComponent {
	constructor() {}
	clickMe1(): void {
		console.log("ABC");
  }

	clickMe2($event): void {
    console.log("DEF");
    console.log($event);
  }

	btnClick($event) : void {
		$event.stopPropagation();
		console.log("btnClick");
  }

	divClick($event):void {
		console.log("divClick");
  }

	onKeyUp($event) : void {
		if($event.which == 13) {
			jQuery("p#result-tag").append('<span class="label label-info">' + $event.target.value + '</span> ');
			$event.target.value = "";
		}
	}
}
