import { Directive, Input, HostBinding, HostListener } from '@angular/core';

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
    console.log(this.id);
	}

}
