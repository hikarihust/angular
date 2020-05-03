import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class CourseDetailGuard implements CanActivate {
	constructor(private _routerService: Router){

	}

  canActivate( route: ActivatedRouteSnapshot ): boolean {
    let id: string = route.url[1].path;
    if(id == 'C01') {
      alert("Invalid Course ID");
      this._routerService.navigate(['courses']);
      return false;
    }
    return true;
  }
}
