import { Component } from '@angular/core';

@Component({
	selector: 'zvn-collapsed',
	templateUrl: './collapsed.component.html'
})

export class CollapsedComponent {
  isCollapsed: boolean=false;

  onCollapsedChange($event) {
    this.isCollapsed = $event;
  }
	setClasses(isCollapsed: boolean) {
		return {
			'glyphicon-chevron-down': !isCollapsed,
			'glyphicon-chevron-right': isCollapsed
		}
  }
}
