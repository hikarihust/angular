import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CourseService } from '../services/course.service';
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
		private _courseService: CourseService)
	{

	}

	ngOnInit(){
    this.getItems();
	}

	getItems(){
    this._courseService.getItems().subscribe(
      (data: ICourse[]) => this.courses = data,
      (error: any) =>  this.errorMessage = error
    );
	}

	getItem(id: number){
    this._courseService.getItem(id).subscribe(
      (data: ICourse) => this.course = data,
      (error: any) =>  this.errorMessage = error
    );
	}

	addItem(){
		let course: ICourse = {
			name: 'abc - name - 123',
			description: 'abc - description - 123'
		};
    this._courseService.addItem(course).subscribe(
      (data: ICourse) => this.courses.push(data),
      (error: any) =>  this.errorMessage = error
    );
	}

	editItem(id: number){
		let course: ICourse = {
			name: 'edit - name',
			description: 'edit - description'
    };

    this._courseService.editItem(id, course).subscribe(
      (data: ICourse) => this.getItems(),
      (error: any) =>  this.errorMessage = error
    );
	}

	deleteItem(id: number){
    this._courseService.deleteItem(id).subscribe(
      (data: ICourse) => this.getItems(),
      (error: any) =>  this.errorMessage = error
    );
	}

}
