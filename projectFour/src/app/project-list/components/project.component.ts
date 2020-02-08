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
			new Course("C01", "ruby on rails developer course", 48,  "c01.jpg",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, eius!",
				["php", "angular", "frontend"]
			)
    );

		this.courses.push(
			new Course("C02", "modern react with redux", 45, "c02.jpg",
				"Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
				["zend2", "jquery"]
			)
		);

		this.courses.push(
			new Course("C03", "complete asp net web development", 23,  "c03.jpg",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus!",
				["php", "wordpress", "html"]
			)
		);

		this.courses.push(
			new Course("C04", "build 8 python web apps", 95, "c04.jpg",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates aspernatur, nostrum veniam consequuntur sapiente unde! Iure.",
				["html", "css", "jquery"]
			)
		);
	}
}
