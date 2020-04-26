import { Component } from '@angular/core';
import { LogService } from './../services/log.service';

@Component({
	selector: 'zvn-hello-two',
	template: `
		<button type="button" class="btn btn-danger" (click)="print('HelloTwoComponent')">
			HelloTwoComponent
		</button>
  `,
  providers: [LogService]
})
export class HelloTwoComponent  {
  private logService: LogService;

	constructor(logService: LogService) {
    this.logService = logService;
  }

	print(content: string) {
    this.logService.print(content);
	}
}
