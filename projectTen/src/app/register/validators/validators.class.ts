import { AbstractControl, FormGroup } from '@angular/forms';

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

	static matchingPasswords(passwordControlName: string, confirmPasswordControlName: string){
		return (group: FormGroup) : { [key:string]: boolean} => {
			let passwordControl 		= group.get(passwordControlName);
      let confirmPasswordControl 	= group.get(confirmPasswordControlName);

			if(passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ mismatchedPasswords: true });
        return { 'mismatchedPasswords': true}
      }
			return null;
		}
  }

	static showError(validatorType: string, validatorValue?: any): string {
    let arrMessage: any = {
      'required' 		: 'Required',
      'minlength'		: `Minlength: ${validatorValue.requiredLength} character`,
      'invalidEmail'	: 'Email invalid',
      'pattern'		: `Pattern: ${validatorValue.requiredPattern}`,
      'mismatchedPasswords'	: 'Password dont match'
    };

		return arrMessage[validatorType];

	}

}
