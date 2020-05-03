import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';


import { CourseService } from './../services/course.service';
import { ICourse } from './../defines/course.interface';

@Component({
	selector: 'zvn-course-delete',
	template: `
		<h3>Delete</h3>
	`
})

export class CourseDeleteComponent implements OnInit {

	ngOnInit(){
	}

}
