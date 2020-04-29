import { Component, OnInit } from '@angular/core';

import { CourseService } from './../services/course.service';


@Component({
	selector: 'zvn-course',
	templateUrl: './course.component.html',
	providers:  [ CourseService ],
})

export class CourseComponent implements OnInit {
	coursesRandom: string[] = [];
	coursesFull: string[] = [];

	constructor( private _courseService: CourseService) {
	}

	ngOnInit(){
		// coursesRandom: string[] = [];
    this.coursesFull 	= this._courseService.getCourses();
    this.coursesRandom 	= this._courseService.getRandomCourses(3);
	}

	randomCourse(){
    this.coursesRandom 	= this._courseService.getRandomCourses(3);
	}

	addCourse(name: string){
    this._courseService.addCourse(name);
	}
}
