import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
	selector: '[zvnContain]'
})

export class ContainDirective {
	@Input("zvnContain") id: string;
	@Input("active") active: boolean = false;

	@HostBinding('hidden') get attrHidden(){
		return !this.active;
	}

}
