import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
    this.setProfileData("quang", "quang@gmail.com", "fb.com", "quang.vn");

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
			'username'	: new FormControl(''),
      'email'		: new FormControl(''),
			'social'	: new FormGroup({
				'facebook'	: new FormControl(''),
				'website'	: new FormControl('')
			})
		})
	}

	onSubmitForm(){
    console.log(this.formProfile.value);
	}

	onResetForm(){
	}

	onBindDataForm(){
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
