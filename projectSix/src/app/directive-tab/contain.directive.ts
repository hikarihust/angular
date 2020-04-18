import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { TabDirective } from './tab.directive';

@Directive({
	selector: '[zvnContain]'
})

export class ContainDirective {
  id: string;
	@Input() set zvnContain(id: string) {
    this.id = id;
  }

  showContain(){
    this.viewContainer.createEmbeddedView(this.templateRef);
  }

  hideContain(){
    this.viewContainer.clear();
  }

	constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private tabDirective: TabDirective) {
		tabDirective.addContain(this);
  }
}
