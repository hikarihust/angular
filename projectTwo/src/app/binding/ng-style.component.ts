import { Component} from '@angular/core';

@Component({
	moduleId: module.id,	
	selector: 'my-ng-style',
	templateUrl: 'ng-style.component.html'
})

export class NgStyleComponent {
	canSave: boolean = true;
	isUnchanged: boolean = false;
	isSpecial: boolean = true;

	setStyles() {
		return {
			'font-style':  this.canSave      ? 'italic' : 'normal',  // italic
			'font-weight': !this.isUnchanged ? 'bold'   : 'normal',  // normal
			'font-size':   this.isSpecial    ? '24px'   : '8px',     // 24px
		};
	}
}

/*
font-style italic
font-weight normal
font-size 24px

font-style: italic; font-weight: bold; font-size: 24px;

<div [ngStyle]="setStyles()">
  This div is italic, normal weight, and extra large (24px).
</div>
*/


