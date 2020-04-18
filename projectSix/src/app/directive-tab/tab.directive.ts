import { Directive, Input, HostBinding, HostListener } from '@angular/core';

import { SelectorDirective } from './selector.directive';
import { ContainDirective } from './contain.directive';

@Directive({
	selector: '[zvnTabContainer]'
})

export class TabDirective {
  selectors: SelectorDirective[] = [];
  contains: ContainDirective[] = [];

	addSelector(selector: SelectorDirective){
		this.selectors.push(selector);
  }

	addContain(contain: ContainDirective){
		this.contains.push(contain);
  }

	show(id: string) {
		this.selectors.forEach( (selector: SelectorDirective) => {
      // console.log(id);
		});
	}
}
