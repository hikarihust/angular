import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
	selector: '[zvnUnless]'
})

export class UnlessDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {

    }

    @Input() set zvnUnless(condition: boolean) {
      if (!condition) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else if (condition) {
        this.viewContainer.clear();
      }
    }
}
