import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IProfile } from './../defines/profile.interface';

@Component({
	selector: 'zvn-profile',
	templateUrl: './../templates/profile.component.html'
})

export class ProfileComponent implements OnInit {
  profile: IProfile = null;
  resultSubmit: any;

	ngOnInit(){
    this.setProfileData("abc", "abc@gmail.com");
  }

	onResetForm(formProfile: NgForm){
		formProfile.reset();
  }

	onSubmitForm(value: any) {
    this.resultSubmit = value;
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
