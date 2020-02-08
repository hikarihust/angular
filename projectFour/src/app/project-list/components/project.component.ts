import { Component } from '@angular/core';
import { Course } from './../define/course.class';

@Component({
	moduleId: module.id,
	selector: 'project-list',
	templateUrl: './../templates/project.component.html'
})

export class ProjectComponent  {
  courses: Course[] = [];
	constructor() {
		this.courses.push(
			new Course("C01", "ruby on rails developer course", "c01.jpg",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, eius!", 48,
				["php", "angular", "frontend"]
			)
    );

		this.courses.push(
			new Course("C02", "modern react with redux", "c02.jpg",
        "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.", 45,
				["zend2", "jquery"]
			)
		);

		this.courses.push(
			new Course("C03", "complete asp net web development",  "c03.jpg",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus!", 23,
				["php", "wordpress", "html"]
			)
		);

		this.courses.push(
			new Course("C04", "build 8 python web apps", "c04.jpg",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates aspernatur, nostrum veniam consequuntur sapiente unde! Iure.",
        95, ["html", "css", "jquery"]
			)
		);
	}
}
