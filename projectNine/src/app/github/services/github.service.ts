import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class GithubService {
  apiUrl: string 		=  'https://api.github.com/';
  username: string;

	constructor(private _httpService: HttpClient){
  }

	getUser() {
    return this._httpService.get(this.apiUrl + 'users/' + this.username)
                .pipe(
                  catchError(this.handleError)
                );
  }

	setUsername(value: string){
		this.username = value;
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
