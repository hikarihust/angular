import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
				<h4><span class="label label-info">ID</span> {{ course.id }} </h4>
				<h4><span class="label label-info">Name</span> {{ course.name }} </h4>
				<h4><span class="label label-info">Description</span> {{ course.description }} </h4>
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
      private _courseService: CourseService,
      private _routerService: Router,
      private _activatedRouteService: ActivatedRoute
	) {

	}

	goCourseList(){
    this._routerService.navigate(['/courses']);
	}

	ngOnInit(){
		let id: string = this._activatedRouteService.snapshot.params['id'];
		this.course = this._courseService.getCourseByID(id);
	}
}
