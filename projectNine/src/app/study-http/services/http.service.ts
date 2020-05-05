import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourse } from '../defines/course.interface';

@Injectable()
export class HttpService {
	constructor(private _httpService: HttpClient){

  }

	getItems(): Observable<ICourse[]> {
    return '';
	}
}
