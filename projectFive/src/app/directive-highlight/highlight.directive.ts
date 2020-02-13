import  { Directive, ElementRef } from "@angular/core";

@Directive({
	selector: '[zvnHighlight]'
})

export class HighlightDirective {
	constructor(private el: ElementRef) {
    this.highlight("blue");
  }

  private highlight(color: string) {
    // this.el.nativeElement.style.backgroundColor = color;

    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.cursor = 'hand';
  }
}
