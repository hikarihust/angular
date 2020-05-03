import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';

import { Subscription } from 'rxjs' ;

import { CourseService } from './../services/course.service';
import { ICourse } from './../defines/course.interface';

@Component({
	selector: 'zvn-course-about',
	template: `
		<div class="panel panel-info">
			<div class="panel-heading">
				<h3 class="panel-title">About</h3>
			</div>
			<div class="panel-body">
				{{ courseToJson(params) }}
			</div>
		</div>

	`
})

export class AboutComponent implements OnInit, OnDestroy {
	subscriptionParams: Subscription;
	params: any;

	constructor(
  		private _courseService: CourseService,
  		private _routerService: Router,
  		private _activatedRouteService: ActivatedRoute,
	) {

	}

	ngOnInit(){
		this.subscriptionParams = this._activatedRouteService.params.subscribe(
			(params: Params) => {
				this.params = params;
			}
		);
  }

  courseToJson(param: Params) {
    return JSON.stringify(course);
  }

	ngOnDestroy(){
		this.subscriptionParams.unsubscribe();
	}

}
