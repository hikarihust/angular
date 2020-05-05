import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '../services/http.service';
import { ICourse } from './../defines/course.interface';

@Component({
	selector: 'zvn-course-list',
	templateUrl: './../templates/course-list.component.html'
})

export class CourseListComponent implements OnInit {
  errorMessage: string;
	courses: ICourse[] = [];
	course: ICourse;

	constructor(
		private _httpService: HttpService)
	{

	}

	ngOnInit(){
	}

	getItems(){
    this._httpService.getItems().subscribe(
      (data: ICourse[]) => this.courses = data,
      (error: any) =>  this.errorMessage = error
    );
	}

	getItem(id: number){
	}

	addItem(){
	}

	editItem(id: number){
	}

	deleteItem(id: number){
	}

}
