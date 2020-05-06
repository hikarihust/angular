import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class GithubService {
  apiUrl: string 		=  'https://api.github.com/';
  clientID: string = '34269a786bf469a2b82a';
  clientSecret: string = '51f3c3221b66a05e5bb1588bdfab76c88e388d6e';

  username: string;

	constructor(private _httpService: HttpClient){
  }

	getUser() {
    return this._httpService.get(this.apiUrl + 'users/' + this.username + '?client_id=' + this.clientID + '&client_secret=' + this.clientSecret)
                .pipe(
                  catchError(this.handleError)
                );
  }

	getRepos() {
    return this._httpService.get(this.apiUrl + 'users/' + this.username + '/repos?client_id=' + this.clientID + '&client_secret=' + this.clientSecret)
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
