import { Component, OnInit, OnDestroy, QueryList } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CourseService } from '../services/course.service';
import { ICourse } from '../defines/course.interface';
import { Subscription } from 'rxjs';

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
        <h4><span class="label label-info">QueryParams: </span> {{ text + " - " + page }} </h4>
				<h4>
					<span class="label label-danger">prevent navigation away from the current route</span>
					<input (keyup)="setAllow($event.target.value)" type="text">
				</h4>
			</div>
			<div class="panel-footer">
        <button (click)="goCourseList()" type="button" class="btn btn-danger">Back Course List</button>
				<button (click)="goPrevCourse()" type="button" class="btn btn-info">Previous</button>
				<button (click)="goNextCourse()" type="button" class="btn btn-success">Next</button>
			</div>
		</div>
	`
})

export class CourseComponent implements OnInit, OnDestroy {
  course: ICourse;
  courseID: number;
  subscriptionParams: Subscription;
  subscriptionQueryParams: Subscription;
  text: string;
  page: number = 0;
  allow: boolean = false;

	constructor(
      private _courseService: CourseService,
      private _routerService: Router,
      private _activatedRouteService: ActivatedRoute
	) {}

	ngOnInit(){
    // this.courseID = parseInt(this._activatedRouteService.snapshot.params['id']);
		// let id: number = this._activatedRouteService.snapshot.params['id'];
    // this.course = this._courseService.getCourseByID(this.courseID);

    this.subscriptionParams = this._activatedRouteService.params.subscribe(
      (params: Params) => {
        this.courseID = parseInt(params['id']);
        this.course = this._courseService.getCourseByID(this.courseID);
      }
    );

    this.subscriptionQueryParams = this._activatedRouteService.queryParams.subscribe(
			(params: Params) => {
        this.text = params['text'];
        this.page = params['page'];
			}
    );
  }

	setAllow(value: string){
    if(value.toLowerCase() === 'ok') {
      this.allow = true;
    } else {
      this.allow = false;
    }

	}

	goPrevCourse() {
		if(this.courseID > 1) {
			this._routerService.navigate(['/course', this.courseID - 1]);
		}

	}

	goNextCourse() {
		if(this.courseID < 5) {
			this._routerService.navigate(['/course', this.courseID + 1]);
		}

	}

	goCourseList(){
    this._routerService.navigate(['/courses']);
  }

	ngOnDestroy(){
		this.subscriptionParams.unsubscribe();
		this.subscriptionQueryParams.unsubscribe();
	}

}
