import { AbstractControl } from '@angular/forms';

export class Validators {

	static emailValidator(formControl: AbstractControl){
		let value:string = (formControl.value != null) ? formControl.value : '';
		let patten: any = /[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}/;

		if (value.length == 0 || value.match(patten)) {
			return null;
		}else{
			 return { 'invalidEmail': true};
		}
  }

}
