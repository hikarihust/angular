import { Directive, ElementRef, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
	selector: '[zvnFavorite]'
})

export class FavoriteDirective {

	@HostBinding('class.is-favorite') isFavorite: boolean = false;
	@HostBinding('class.is-hovering') isHovering: boolean = false;

	@Input() set zvnFavorite(value) {
		this.isFavorite = value;
	}

	@HostListener('mouseenter') onMouseEnter() {
		this.isHovering = true;
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.isHovering = false;
	}
}
