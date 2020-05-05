// import { Response } from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICourse } from '../defines/course.interface';

@Injectable()
export class CourseService {
  private apiUrl = 'https://5eb03afce6828200164a68aa.mockapi.io/api/angular/v1/courses/';  // URL to web API
	// Method 	Action
	// GET 		Get Items 	http://586fc8ad0474f212000b02c5.mockapi.io/api/angular2/v2/courses'
	// GET 		Get Item 	http://586fc8ad0474f212000b02c5.mockapi.io/api/angular2/v2/courses/:id
	// POST 	Add Item 	http://586fc8ad0474f212000b02c5.mockapi.io/api/angular2/v2/courses
	// PUT 		Edit Item 	http://586fc8ad0474f212000b02c5.mockapi.io/api/angular2/v2/courses/:id
  // DELETE 	Delete Item http://586fc8ad0474f212000b02c5.mockapi.io/api/angular2/v2/courses/:id

	constructor(private _httpService: HttpClient){

  }

	getItems() {
    return this._httpService.get(this.apiUrl)
                .pipe(
                  catchError(this.handleError)
                );
  }

	getItem(id: number) {
    return this._httpService.get(this.apiUrl + id)
                .pipe(
                  catchError(this.handleError)
                );
  }

	addItem(course: ICourse): Observable<ICourse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this._httpService.post<ICourse>(this.apiUrl, course, httpOptions)
              .pipe(
                catchError(this.handleError)
              );
  }

	editItem(id: number, course: ICourse): Observable<ICourse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this._httpService.put<ICourse>(this.apiUrl + id, course, httpOptions)
              .pipe(
                catchError(this.handleError)
              );
  }

	deleteItem(id: number): Observable<{}> {
    return this._httpService.delete(this.apiUrl + id)
              .pipe(
                catchError(this.handleError)
              );
  }

  private handleError(error: HttpErrorResponse) {
    let errMsg: string;
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
      errMsg = 'An error occurred:' + error.error.message;
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      errMsg = `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`;
    }
    return throwError(errMsg);
  }
}
