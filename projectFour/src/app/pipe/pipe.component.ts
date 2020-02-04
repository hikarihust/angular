import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'zvn-pipe',
	templateUrl: './pipe.component.html'
})


export class PipeComponent { 
	// Normarl
	courseObj: any = {
		'id'	: 20,
		'name'	: 'Angular 2',
		'date'	: new Date(),
		'price'	: 250450.87654,
		'require'	: ['typescript', 'html', 'css', 'javascript']
	};

	// Percent
	percentA: number = 0.123;
	percentB: number = 2.123;
}
