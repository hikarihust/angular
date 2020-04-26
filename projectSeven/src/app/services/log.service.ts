import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  lastContent: string;
	constructor() {}

	print(content: string){
    console.log("Current:_________" + content);
    console.log("Last:_________" + this.lastContent);

    this.lastContent = content;
	}
}
