import { Component, Input } from '@angular/core';
import { Course } from '../define/course.class';

@Component({
	moduleId: module.id,
	selector: 'zvn-course',
	templateUrl: './../templates/course.component.html'
})

export class CourseComponent  {
  @Input("course") courseObj: Course;
	constructor() {

  }
}
