import { Component, OnInit } from '@angular/core';

import { IProfile } from './../defines/profile.interface';

@Component({
	selector: 'zvn-profile',
	templateUrl: './../templates/profile.component.html'
})

export class ProfileComponent implements OnInit {

	profile: IProfile = null;
	resultSubmit: any;

	constructor(){}

	ngOnInit(){
		this.setProfileData("quang", "quang@gmail.com", "fb.com", "quang.vn");
	}

	onSubmitForm(){
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
