import { Directive, Input, HostBinding, HostListener } from '@angular/core';

import { TabDirective } from './tab.directive';

@Directive({
	selector: '[zvnSelector]'
})

export class SelectorDirective {
	@Input("zvnSelector") id: string;
	@Input("active") active: boolean = false;

	@HostBinding('class.active') get classActive(){
		return this.active;
	}

	@HostListener('click') onClick(){
    // tabDirective
    this.tabDirective.show(this.id);
	}

	constructor(private tabDirective: TabDirective) {
		tabDirective.addSelector(this);
	}
}
