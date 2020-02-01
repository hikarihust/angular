import { Component, Directive, Input, Output, EventEmitter} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'zvn-output',
	templateUrl: './output.component.html',
})

export class OutputComponent {
  @Output('answerRequest') myRequest = new EventEmitter<string>();

	@Input("mtitle") stitle: string;
  @Input("mdescription") sdes: string;

	onClick(value: number){
		let valueAns: string = "No";
		if(value == 1) valueAns = "Yes";

		this.myRequest.emit(valueAns);
	}
}
