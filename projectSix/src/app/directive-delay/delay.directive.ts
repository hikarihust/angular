import { Directive, Input } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[zvnDelay]'
})

export class DelayDirective {
    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {

    }

    @Input() set zvnDelay(time: number) {
      setTimeout(() => {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }, time);
    }

}
