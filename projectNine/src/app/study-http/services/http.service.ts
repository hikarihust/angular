// import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourse } from '../defines/course.interface';

@Injectable()
export class HttpService {
  private apiUrl = 'https://5eb03afce6828200164a68aa.mockapi.io/api/angular/v1/courses/';  // URL to web API
	// Method 	Action
	// GET 		Get Items 	http://586fc8ad0474f212000b02c5.mockapi.io/api/angular2/v2/courses'
	// GET 		Get Item 	http://586fc8ad0474f212000b02c5.mockapi.io/api/angular2/v2/courses/:id
	// POST 	Add Item 	http://586fc8ad0474f212000b02c5.mockapi.io/api/angular2/v2/courses
	// PUT 		Edit Item 	http://586fc8ad0474f212000b02c5.mockapi.io/api/angular2/v2/courses/:id
  // DELETE 	Delete Item http://586fc8ad0474f212000b02c5.mockapi.io/api/angular2/v2/courses/:id

	constructor(private _httpService: HttpClient){

  }

	// getItems(): Observable<ICourse[]> {
	getItems(): any {
    return this._httpService.get(this.apiUrl);
	}
}
