import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'courseSummary'
})

export class CourseSummaryPipe implements PipeTransform {
	transform(value: string, typeSummary: number = 0): string {

		if(value) {
			let limit: number = 10;
			if(typeSummary == 1) limit = 40;
			if(typeSummary == 2) return value;

			return value.substring(0, limit) + "...";

		} else {
			return '';
		}
	}
}

