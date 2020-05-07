import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class SpotifyService {
  apiURL: string = 'https://api.spotify.com/';
  clientID: string = 'a9603bfb11e242bf8e81426311efa095';
  clientSecret: string = '75f88d806ee241d7b3ebbd463c9cda03';
  authToken: string = 'BQD7J9LhZ8rxELZufAS58Hkkwo0AezuQ8aP4l-dBuXOkGJc-LS713_BImvV0Qbt7yAtBaRKhAs6kXF80lWXRLMX6DWxReRhlrxSoQCVqFLwiiEMQrPwW4JviIOMTDbpWaEF4vU7153vqY7SxWKYXSYDnAjD3jNve38PpAfUxg8xmpdnBHA';
	constructor(private _httpService: HttpClient){
	}

	searchArtists(name: string): any{
    let url: string = this.apiURL + 'v1/search?q=' + name + '&type=artist';
    const httpOptions = this.getOptions();

    return this._httpService.get(url, httpOptions)
                .pipe(
                  catchError(this.handleError)
                );
  }

	getArtist(id: string): any{
    let url: string = this.apiURL + 'v1/artists/' + id;
    const httpOptions = this.getOptions();

    return this._httpService.get(url, httpOptions)
                .pipe(
                  catchError(this.handleError)
                );
	}

	getAlbums(artistId: string){
    let url: string = this.apiURL + 'v1/artists/' + artistId + '/albums?offset=0&limit=5';
    const httpOptions = this.getOptions();

    return this._httpService.get(url, httpOptions)
                .pipe(
                  catchError(this.handleError)
                );
  }

  getAlbum(id: string){
    let url: string = this.apiURL + 'v1/albums/' + id;
    const httpOptions = this.getOptions();

    return this._httpService.get(url, httpOptions)
                .pipe(
                  catchError(this.handleError)
                );
  }

  getOptions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.authToken}`
      })
    };

    return httpOptions;
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
