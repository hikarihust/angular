import {
	Component,
	OnInit,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
  AfterViewInit,
  ContentChild,
  ViewChild,
  AfterViewChecked,
  ElementRef
 } from '@angular/core';

@Component({
	selector: 'zvn-lifecycle-three',
	template: `
    <h2 #h2Child>Three Component</h2>
    <ng-content></ng-content>
		<ul class="list" >
			<li *ngFor="let hook of hooks">
				{{ hook }}
			</li>
		</ul>
	`
})

export class ThreeComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @ContentChild('myChild') myChild: ElementRef;
  @ViewChild('h2Child') h2Child: ElementRef;

	hooks: string[] = [];

	constructor() {
		this.hooks.push("constructor");
	}

	ngOnInit() {
    this.hooks.push("ngOnInit");
  }

	ngDoCheck() {
		this.hooks.push("ngDoCheck");
	}

	ngAfterContentInit() {
		this.hooks.push("ngAfterContentInit");
	}

	ngAfterContentChecked() {
    this.hooks.push("ngAfterContentChecked");
    console.log(this.myChild.nativeElement.innerText);
		this.myChild.nativeElement.innerText = "11111111111111111";
	}

	ngAfterViewInit() {
		this.hooks.push("ngAfterViewInit");
  }

	ngAfterViewChecked() {
    this.h2Child.nativeElement.innerText = "222222222222222222";
	}
}
