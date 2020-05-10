import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Validators } from './../validators/validators.class';

@Component({
	selector: 'zvn-control-message',
	templateUrl: './../templates/control-message.component.html'
})

export class ControlMessageComponent implements OnInit {
  @Input('control') control: FormControl;
  arrMessage: any = {
    'required' 		: 'Required',
    'minlength'		: 'minlength',
    'invalidEmail'	: 'Email invalid'
  };

	constructor(){}

	get message(): string{
		for(let property in this.control.errors){
			if((this.control.dirty || this.control.touched) && this.control.errors.hasOwnProperty(property)) {
        return Validators.showError(property, this.control.errors[property]);
			}
		}
  }

	ngOnInit(){
  }
}
