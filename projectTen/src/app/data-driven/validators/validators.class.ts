import { FormControl } from '@angular/forms';

export class Validators {
	
	static emailValidator(formControl: FormControl){
		let value:string = (formControl.value != null) ? formControl.value : '';
		let patten: any = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;

		if(value.length==0 || value.match(patten)){
			return null;
		}else{
			 return { 'invalidEmail': true};
		}
	}

	static showError(validatorType: string, validatorValue?: string): string {
		let arrMessage: any = {
			'required' 		: 'Required',
			'minlength'		: 'Minlength: ' + validatorValue['requiredLength'] + ' character',
			'invalidEmail'	: 'Email invalid',
			'pattern'		: 'Pattern: ' + validatorValue['requiredPattern']
		}

		return arrMessage[validatorType];

	}
}