import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

	constructor(private _httpService: HttpClient){
	}

	searchArtists(name: string): any{
	}

	getArtist(id: string): any{
	}

	getAlbums(artistId: string){
  }

  getAlbum(id: string){
  }

	private extractData(res) {
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
