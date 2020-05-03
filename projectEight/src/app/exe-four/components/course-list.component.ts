import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CourseService } from './../services/course.service';
import { ICourse } from './../defines/course.interface';

@Component({
	selector: 'zvn-course-list',
	template: `
		<div class="panel panel-info">
			<div class="panel-heading">
				<h3 class="panel-title">Course List</h3>
			</div>
			<div class="panel-body">
				<table class="table table-striped table-hover">
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr *ngFor="let course of courses; let i = index">
							<td>{{ i+1 }}</td>
							<td >{{ course.name | capitalize }}</td>
              <td [zvnHighlight]="'#F7F9D2'"><span (click)="onSelectDetail(course.id)" class="label label-success">View</span>
                <span class="label label-warning">Edit</span>
                <span class="label label-danger">Delete</span>
              </td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	`
})

export class CourseListComponent implements OnInit {
	courses: ICourse[];

	constructor(
    private _courseService: CourseService,
    private _routerService: Router
	) {

	}

	ngOnInit() {
    this.courses = this._courseService.getCourses();
	}

	onSelectDetail(courseID: string){
    this._routerService.navigate(['/course', courseID], {
      queryParams: {
        from: 'course-list'
      }
    });
    // this._routerService.navigateByUrl(`course/${courseID}`);
	}
}
