import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'zvn-cus-pipe',
	templateUrl: './cus-pipe.component.html'
})


export class CusPipeComponent {
	// Normarl
	courseObj: any = {
		'id'	: 20,
		'name'	: 'Angular 2',
		'date'	: new Date(),
		'price'	: 20.1223,
		'require'	: ['html', 'typescript', 'css', 'javascript', 'bootstrap']
	};

	// Array Number
	arrNumber: number[] = [8,9,5,4,1,3,2,7,6];

	// Summary
	description: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe animi perspiciatis repellat illum dolorum blanditiis odit soluta obcaecati ipsa deserunt.';

    // Capitalize
	text: string = "Angular 2 Is very easy";

	// Category
	arrCategory: string[] = [ "IT", "Programming", "Mobile", "Web", "Net", "Frontend", "IT", "Web"];
}
