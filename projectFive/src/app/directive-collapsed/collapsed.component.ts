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
	setClasses() {
		return {
			'glyphicon-chevron-down': !this.isCollapsed,
			'glyphicon-chevron-right': this.isCollapsed
		}
  }

  isCollapsed2: boolean=true;
  onCollapsedChange2($event) {
    this.isCollapsed2 = $event;
  }
	setClasses2() {
		return {
			'glyphicon-chevron-down': !this.isCollapsed2,
			'glyphicon-chevron-right': this.isCollapsed2
		}
	}
}
