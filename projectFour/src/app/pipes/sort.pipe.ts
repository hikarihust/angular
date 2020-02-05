import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'sort'
})
export class SortPipe implements PipeTransform {

	transform(arrCourse: string[], args: string): any { // ASC DESC
		// let sorted: string[] = arrCourse.slice();
		let sorted: string[] = [...arrCourse];
		sorted.sort();

		if(args === 'DESC') {
			sorted = sorted.reverse();
		}

		return sorted;
	}
}
