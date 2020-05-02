import { Component, OnInit } from '@angular/core';

import { CourseService } from './../services/course.service';
import { ICourse } from './../defines/course.interface';

@Component({
	selector: 'zvn-course-detail',
	template: `
		<div class="panel panel-primary">
			<div class="panel-heading">
				<h3 class="panel-title">Course Detail</h3>
			</div>
			<div class="panel-body">
				<h4><span class="label label-info">ID</span></h4>
				<h4><span class="label label-info">Name</span></h4>
				<h4><span class="label label-info">Description</span></h4>
			</div>
			<div class="panel-footer">
				<button (click)="goCourseList()" type="button" class="btn btn-danger">Back Course List</button>
			</div>
		</div>
	`
})

export class CourseDetailComponent implements OnInit {
	course: ICourse;

	constructor(
  		private _courseService: CourseService
	) {

	}

	goCourseList(){
	}

	ngOnInit(){
	}
}
