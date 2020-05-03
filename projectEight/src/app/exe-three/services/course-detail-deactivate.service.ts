import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate }    from '@angular/router';
import { CourseComponent } from "./../components/course.component";

@Injectable()
export class CourseDetailDeactivateService implements CanDeactivate<CourseComponent> {

	constructor() {}

	canDeactivate(
		component: CourseComponent,
    	route: ActivatedRouteSnapshot,
    	state: RouterStateSnapshot
  	): boolean {
    	return component.allow;
  	}
}
