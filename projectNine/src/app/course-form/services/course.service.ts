// import { Response } from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICourse } from '../defines/course.interface';

@Injectable()
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses/';  // URL to web API

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

	editItem(course: ICourse): Observable<ICourse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this._httpService.put<ICourse>(this.apiUrl + course.id, course, httpOptions)
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
