import { Directive, HostListener, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Directive({
	selector: '[zvnCollapsed]'
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

	@HostListener('click') toogle() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsed.emit(this.isCollapsed);
    this.collapsed2.emit(this.isCollapsed);
  }

  @Output('collapsed') collapsed = new EventEmitter<boolean>();
  @Output('collapsed2') collapsed2 = new EventEmitter<boolean>();
}
