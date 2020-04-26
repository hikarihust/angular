import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
	constructor() {}

	print(content: string){
    console.log("Service:_________" + content);
	}
}
