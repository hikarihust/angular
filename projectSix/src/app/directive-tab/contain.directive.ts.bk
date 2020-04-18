import { Directive, Input, HostBinding } from '@angular/core';

import { TabDirective } from './tab.directive';

@Directive({
	selector: '[zvnContain]'
})

export class ContainDirective {
	@Input("zvnContain") id: string;
	@Input("active") active: boolean = false;

	@HostBinding('hidden') get attrHidden(){
		return !this.active;
	}

	constructor(private tabDirective: TabDirective) {
		tabDirective.addContain(this);
	}
}
