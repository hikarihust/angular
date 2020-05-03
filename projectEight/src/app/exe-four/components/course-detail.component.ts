import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';

import { Subscription } from 'rxjs';

import { CourseService } from './../services/course.service';
import { ICourse } from './../defines/course.interface';
import { CourseComponent } from './course.component';

@Component({
	selector: 'zvn-course-detail',
	template: `
    <h3>Detail</h3>
    <h4>{{ courseToJson(course) }}</h4>
		<button (click)="goEditCourse()" type="button" class="btn btn-info">Edit</button>
		<button (click)="goDeleteCourse()" type="button" class="btn btn-success">Delete</button>
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
    this.subscription = this._activatedRouteService.parent.params.subscribe(
      (params: Params) => {
        this.course = this._courseService.getCourseByID(parseInt(params['id']));
      }
    );
	}

	goEditCourse(){
		this._routerService.navigate(['edit'], { relativeTo: this._activatedRouteService.parent } );
	}

	goDeleteCourse(){
		this._routerService.navigate(['delete'], { relativeTo: this._activatedRouteService.parent } );
	}

  courseToJson(course: ICourse) {
    return JSON.stringify(course);
  }

	ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
