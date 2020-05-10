import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { IProfile } from './../defines/profile.interface';
import { Validators as ZValidators } from './../validators/validators.class';

@Component({
	selector: 'zvn-profile',
	templateUrl: './../templates/profile.component.html'
})

export class ProfileComponent implements OnInit {

	profile: IProfile = null;
  resultSubmit: any;
  formProfile: FormGroup; // = form FormGroup > FormGroup > FormControl

	constructor(private _formBuilder: FormBuilder){}

	ngOnInit(){
    this.setProfileData("quang", "quang@gmail.com", "facebook", "quang.vn");

    /*this.formProfile = new FormGroup({
			'username'	: new FormControl('abc', [
        Validators.required,
        Validators.minLength(5)
      ]),
      'email'		: new FormControl('',[
				Validators.required,
				Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")
      ]),
			'social'	: new FormGroup({
				'facebook'	: new FormControl('', [
					Validators.required,
					Validators.pattern("[a-z0-9]{5,10}")
        ]),
				'website'	: new FormControl('')
			})
    })*/

    this.formProfile = this._formBuilder.group({
			'username'	: [ '', [
        Validators.required,
        Validators.minLength(5)
      ]],
      'email'		: ['',[
				Validators.required,
        ZValidators.emailValidator
      ]],
			'social'	: this._formBuilder.group({
				'facebook'	: ['', [
					Validators.required,
					Validators.pattern("[a-z0-9]{5,10}")
        ]],
				'website'	: ['']
			})
    });
    // console.log(this.formProfile.controls.email);
		// this.formProfile.valueChanges.subscribe(
		// 	(value: any) => console.log(value)
		// );
	}

	onSubmitForm(){
    this.resultSubmit = this.formProfile.value;
		if(this.formProfile.dirty && this.formProfile.valid){
			this.resultSubmit = this.formProfile.value;
		}
	}

	onResetForm(){
    this.formProfile.reset();
	}

	onBindDataForm(){
		this.formProfile.patchValue({
			username: this.profile.username,
			email 	: this.profile.email,
			social 	: {
				facebook	: this.profile.facebook,
				website 	: this.profile.website,
			}
		})
	}

	private setProfileData(username: string = "", email: string = "", facebook: string = "", website:string = ""){
		this.profile = {
			username	: username,
			email 		: email,
			facebook 	: facebook,
			website 	: website
		}
	}
}
