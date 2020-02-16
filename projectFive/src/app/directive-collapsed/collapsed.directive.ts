import { Directive, HostListener, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[zvnCollapsed]',
  exportAs: 'zvnCollapsed'
})

export class CollapsedDirective {
  @HostBinding('class.is-collapsed') isCollapsed: boolean;

  @Input("zvnCollapsed") set zvnCollapsed(value: boolean) {
    if(value===false) {
      this.isCollapsed=false;
    } else {
      this.isCollapsed=true;
    }
  }

	@HostListener('click', ['$event.target']) toogle(elem) {
		if(elem.tagName.toLowerCase() === "span") {
			this.isCollapsed = !this.isCollapsed;
    }
  }
}
