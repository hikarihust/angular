import { Injectable } from '@angular/core';
import { ICourse } from './../defines/course.interface';

@Injectable()
export class CourseService {
	courses: ICourse[] = [];

	constructor() {
		this.courses = [
			{id: 1, name: "angular tutorial", description: "angular Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, id."},
			{id: 2, name: "typescript", description: "typescript Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, id."},
			{id: 3, name: "php", description: "php Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, id."},
			{id: 4, name: "nodejs", description: "nodejs Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, id."},
			{id: 5, name: "reactjs", description: "reactjs Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, id."},
		];
	}

	getCourses(): ICourse[] {
		return this.courses;
	}

	getCourseByID(id: number): ICourse {
		let result: ICourse = null;
		for (var i = 0; i < this.courses.length; i++) {
			if(this.courses[i].id == id) {
				result = this.courses[i];
				break;
			}
		}
		return result;
	}
}
