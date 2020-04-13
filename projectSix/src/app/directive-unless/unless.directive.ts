import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[zvnUnless]'
})

export class UnlessDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {
      console.log(templateRef)
    }
}
