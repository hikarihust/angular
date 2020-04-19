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
        <zvn-lifecycle-one *ngIf="show"></zvn-lifecycle-one>
      </div>
			<div class="panel-footer">
				<button (click)="show = false" type="button" class="btn btn-default">Destroy</button>
			</div>
		</div>
	`
})

export class MainComponent   {
  show:boolean = true;
	constructor() {
	}
}
