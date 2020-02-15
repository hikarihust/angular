import  { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: '[zvnHighlight]',
	host: {
		'(click)': 'onClick($event)'
	}
})

export class HighlightDirective {
  @Input("zvnHighlight") highLightColor: string;

  private _defaultColor: string = "yellow";

	constructor(private el: ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highLightColor || this._defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

	// @HostListener('click', ['$event']) onClick(btn) {
	// 	console.log(btn);
  // }

	onClick($event) {
		console.log($event.target.innerText);
	}

  private highlight(color: string) {
    // this.el.nativeElement.style.backgroundColor = color;

    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.cursor = 'hand';
  }
}
