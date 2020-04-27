import { Component } from '@angular/core';
import { CaculatorService } from './../services/caculator.service';
import { LogService } from './../services/log.service';

@Component({
	selector: 'zvn-caculator',
	template: `
		<form>
			<div class="form-group">
				<label class="sr-only" for="">Number One</label>
				<input type="number" class="form-control" placeholder="Number One" #num1>
			</div>

			<div class="form-group">
				<label class="sr-only" for="">Number Two</label>
				<input type="number" class="form-control" placeholder="Number Two" #num2>
			</div>

			<button type="button" class="btn btn-primary" (click)="sum(num1.value, num2.value)">Sum</button>
			<h4>{{ result }}</h4>
		</form>
  `,
  providers: [ CaculatorService, LogService ]
})
export class CaculatorComponent  {
  result: number = 0;
  private _caculatorService: CaculatorService
  private _logService: LogService

	constructor(caculatorService: CaculatorService, logService: LogService) {
    this._caculatorService = caculatorService;
    this._logService = logService;
  }

	sum(number1: string, number2: string){
    this.result = this._caculatorService.sum(parseInt(number1), parseInt(number2));
    this._logService.print(this.result + "");
	}
}
