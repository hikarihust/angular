import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class SpotifyService {
  apiURL: string = 'https://api.spotify.com/';
  clientID: string = 'a9603bfb11e242bf8e81426311efa095';
  clientSecret: string = '75f88d806ee241d7b3ebbd463c9cda03';
  authToken: string = 'BQCvx5AFH0PIidvIFDvNQjHQ64QPXs91rCmINLK0lmLI2XCxcg9GiA7Fgcu6bvLuL4puXnqB6gR0isivqXfnVya0f31pclImruSsMcf0mndTL_drVGvJaA9i5k73FT2p1OICx3xbhWk-5S-4pf-MXv8j3HYFnPNghZn_ucbYDpZAxb3AtQ';
	constructor(private _httpService: HttpClient){
	}

	searchArtists(name: string): any{
    let url: string = this.apiURL + 'v1/search?q=' + name + '&type=artist';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.authToken}`
      })
    };

    return this._httpService.get(url, httpOptions)
                .pipe(
                  catchError(this.handleError)
                );
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
