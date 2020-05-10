import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IProfile } from './../defines/profile.interface';

@Component({
	selector: 'zvn-profile',
	templateUrl: './../templates/profile.component.html'
})

export class ProfileComponent implements OnInit {

	profile: IProfile = null;
  resultSubmit: any;
  formProfile: FormGroup; // = form FormGroup > FormGroup > FormControl

	constructor(){}

	ngOnInit(){
    this.setProfileData("quang", "quang@gmail.com", "facebook", "quang.vn");

		/*
		this.formProfile = new FormGroup({
			'username'	: new FormControl('abc', [
				Validators.required,
				Validators.minLength(5)
			]),
			'email'		: new FormControl('', [
				Validators.required,
				Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")
			]),
			'social'	: new FormGroup({
				'facebook'	: new FormControl('', [
					Validators.required,
					Validators.pattern("[a-z0-9]{5,10}")
				]),
				'website'	: new FormControl(),
			})
    })*/

		this.formProfile = new FormGroup({
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
		})
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
