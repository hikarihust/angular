import { Injectable } from '@angular/core';

@Injectable()
export class CaculatorService {

	constructor() {}

	sum(number1: number, number2: number) : number{
		return number1 + number2;
	}
}
