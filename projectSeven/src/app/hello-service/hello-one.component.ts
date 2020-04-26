import { Component } from '@angular/core';
import { LogService } from './../services/log.service';

@Component({
	selector: 'zvn-hello-one',
	template: `
		<button type="button" class="btn btn-info" (click)="print('HelloOneComponent')">
			HelloOneComponent
		</button>
  `,
  providers: [LogService]
})

export class HelloOneComponent  {
  private logService: LogService;

	constructor(logService: LogService) {
    this.logService = logService;
  }

	print(content: string){
    this.logService.print(content);
	}
}
