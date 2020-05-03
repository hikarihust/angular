import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';


import { CourseService } from './../services/course.service';
import { ICourse } from './../defines/course.interface';

@Component({
	selector: 'zvn-course-edit',
	template: `
		<h3>Edit</h3>
	`
})

export class CourseEditComponent implements OnInit {

	ngOnInit(){
	}

}
