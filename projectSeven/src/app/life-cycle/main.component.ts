import { Component } from '@angular/core';

@Component({
	selector: 'zvn-lifecycle',
	template: `
		<div class="panel panel-info">
			<div class="panel-heading">
				<h3 class="panel-title">LifeCycleHook</h3>
			</div>
			<div class="panel-body">
        <!-- <zvn-lifecycle-all></zvn-lifecycle-all> -->
        <!-- <zvn-lifecycle-one *ngIf="show"></zvn-lifecycle-one> -->
        <!-- <zvn-lifecycle-two [value1]="value1" [value2]="value2"></zvn-lifecycle-two> -->
        <!-- <zvn-lifecycle-three>
            <b #myChild style="color:red">{{ title }}</b>
        </zvn-lifecycle-three> -->
        <zvn-lifecycle-four></zvn-lifecycle-four>
      </div>
			<div class="panel-footer">
        <!-- <button (click)="title = 'abc'" type="button" class="btn btn-default">Change ABC</button>
        <button (click)="title = 'def'" type="button" class="btn btn-default">Change DEF</button> -->
        <!-- <button (click)="show = false" type="button" class="btn btn-default">Destroy</button> -->
				<!-- <button (click)="value1 = '456'" type="button" class="btn btn-info">Change value 1</button> -->
				<!-- <button (click)="value1 = '234'; value2 = '456'" type="button" class="btn btn-danger">Change value 1 & 2</button> -->
			</div>
		</div>
	`
})

export class MainComponent   {
  show:boolean = true;
	value1: string = "123";
  value2: string = "def";
  title: string = "After Content";
	constructor() {
	}
}
