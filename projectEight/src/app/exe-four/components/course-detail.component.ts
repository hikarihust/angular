import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';

import { Subscription } from 'rxjs/Rx' ;

import { CourseService } from './../services/course.service';
import { ICourse } from './../defines/course.interface';

@Component({
	selector: 'zvn-course-detail',
	template: `
		<h3>Detail</h3>
	`
})

export class CourseDetailComponent implements OnInit, OnDestroy {
	course: ICourse;
	subscription: Subscription;

	constructor(
  		private _courseService: CourseService,
  		private _routerService: Router,
  		private _activatedRouteService: ActivatedRoute,
	) {
	}

	ngOnInit(){
	}

	goEditCourse(){
	}

	ngOnDestroy(){
    this.subscription.unsubscribe();
	}

}
