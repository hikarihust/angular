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
  selectedCourse: ICourse;

	constructor(
		private _courseService: CourseService)
	{

	}

	ngOnInit(){
    this.getItems();
	}

	getItems(){
    this._courseService.getItems().subscribe(
      (data: ICourse[]) => console.log(data),
      (error: any) =>  this.errorMessage = error
    );
	}

	// getItem(id: number){
  //   this._courseService.getItem(id).subscribe(
  //     (data: ICourse) => this.course = data,
  //     (error: any) =>  this.errorMessage = error
  //   );
	// }

	addItem(courseName: string, courseDescription: string, courseFree: boolean){
		let course: ICourse	= {
			name		: courseName,
			description	: courseDescription,
			free		: courseFree
		};
    this._courseService.addItem(course).subscribe(
      (data: ICourse) => console.log(data),
      (error: any) =>  this.errorMessage = error
    );
	}

	editItem(){
    this._courseService.editItem(this.selectedCourse).subscribe(
      (data: ICourse) => console.log(data),
      (error: any) =>  this.errorMessage = error
    );
	}

	deleteItem(id: number){
    this._courseService.deleteItem(id).subscribe(
      (data: ICourse) => console.log(data),
      (error: any) =>  this.errorMessage = error
    );
  }

	changeToFree(course: ICourse) {
		course.free = !course.free;
		this._courseService.editItem(course).subscribe(
      (data: ICourse) => console.log(data),
      (error: any) =>  this.errorMessage = error
		);
  }

	// Cập nhật 1 khóa học trong danh sách dựa vào course
	private updateCourseFromArray(course: ICourse){
		let length = this.courses.length;
		for (let i = 0; i < length; i++) {
			if(this.courses[i].id == course.id) {
				this.courses[i] = course;
				break;
			}
		}
	}

	// Xóa 1 khóa học ra khỏi danh sách dựa vào id
	private removeCourseFromArray(id: number){
		let length = this.courses.length;
		for (let i = 0; i < length; i++) {
			if(this.courses[i].id == id) {
				this.courses.splice(i, 1);
				break;
			}
		}
	}

}
