import { Directive, Input, HostBinding, HostListener, ContentChildren, QueryList } from '@angular/core';

import { SelectorDirective } from './selector.directive';
import { ContainDirective } from './contain.directive';

@Directive({
	selector: '[zvnTabContainer]'
})

export class TabDirective {
  selectors: SelectorDirective[] = [];
  contains: ContainDirective[] = [];
  idCurrent: string;

	addSelector(selector: SelectorDirective){
		this.selectors.push(selector);
  }

	addContain(contain: ContainDirective){
		this.contains.push(contain);
  }

	ngAfterContentChecked(){
		this.selectors.forEach( (selector: SelectorDirective) => {
			if(selector.active == true) this.idCurrent = selector.id;
		});
		this.show(this.idCurrent);
	}

	show(id: string) {
		this.selectors.forEach( (selector: SelectorDirective) => {
      selector.active = selector.id == id;
    });

		this.contains.forEach( (contain: ContainDirective) => {
			contain.hideContain();
			if(contain.id == id) contain.showContain();
    });
	}
}
