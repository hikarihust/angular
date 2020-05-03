import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'zvn-widget-dashboard',
	template: `
		<button type="button" [ngClass]="setClass('button')" (click)="toogle('button')">Button</button>
		<button type="button" [ngClass]="setClass('typography')" (click)="toogle('typography')">Typography</button>
		<button type="button" [ngClass]="setClass('list')" (click)="toogle('list')">List</button>
	`
})

export class DashboardComponent implements OnInit {

	sectionButton:boolean;
	sectionTypography:boolean;
	sectionList:boolean;

	ngOnInit(){
		this.sectionButton = true;
		this.sectionTypography = true;
		this.sectionList = true;
    this.setDashboard();
	}

	constructor(
  		private _routerService: Router,
  		private _activatedRouteService: ActivatedRoute,
	) {
	}

	toogle(type: string){
	}

	setDashboard(){
	}

	setClass(type: string){
	}
}
