import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'zvn-control',
	templateUrl: './../templates/control.component.html'
})

export class ControlComponent  {
	@Output("typeSummaryChange") typeSummaryChange = new EventEmitter<number>();
  @Output("typeCurrencyChange") typeCurrencyChange = new EventEmitter<string>();

  settingSummary(value: any){
		this.typeSummaryChange.emit(value);
	}

	settingCurrency(value: any){
		this.typeCurrencyChange.emit(value);
	}

	constructor() {

  }
}
