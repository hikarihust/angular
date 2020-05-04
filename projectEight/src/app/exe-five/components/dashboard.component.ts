import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'zvn-widget-dashboard',
	template: `
		<button type="button" class="btn" [className]="setClass('button')" (click)="toogle('button')">Button</button>
		<button type="button" class="btn" [className]="setClass('typography')" (click)="toogle('typography')">Typography</button>
    <button type="button" class="btn" [className]="setClass('list')" (click)="toogle('list')">List</button>
	`
})

export class DashboardComponent implements OnInit {

	sectionButton:boolean;
	sectionTypography:boolean;
	sectionList:boolean;

	ngOnInit(){
		this.sectionButton = false;
		this.sectionTypography = false;
		this.sectionList = false;
    this.setDashboard();
	}

	constructor(
  		private _routerService: Router,
  		private _activatedRouteService: ActivatedRoute,
	) {
	}

	toogle(type: string){
		switch (type) {
			case "button":
				this.sectionButton = !this.sectionButton;
				break;
			case "typography":
				this.sectionTypography = !this.sectionTypography;
				break;
			case "list":
				this.sectionList = !this.sectionList;
				break;
		}
		this.setDashboard();
	}

	setDashboard(){
	}

	setClass(type: string){
		let flag: boolean = false;
		switch (type) {
			case "button":
				flag = this.sectionButton;
				break;
			case "typography":
				flag = this.sectionTypography;
				break;
			case "list":
				flag = this.sectionList;
				break;
		}

     if(flag == true) {
      return 'btn-info';
    } else {
      return 'btn-default';
    }
	}
}
