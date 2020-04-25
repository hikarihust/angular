import { StyleComponent } from './../../../../projectTwo/src/app/proj-style/style.component';
import {
	Component,
	OnInit,
	ViewChild,
	AfterViewInit,
	AfterViewChecked,
	ElementRef } from '@angular/core';

@Component({
	selector: 'zvn-lifecycle-four',
	template: `
        <ul #list>
        	<li *ngFor="let course of courses">
				    {{ course }}
          </li>
        </ul>
        <input #txt type="text" class="form-control">
        <button (click)="addCourses(txt.value)" type="button" class="btn btn-info">Add</button>
	`
})

export class FourComponent implements OnInit, AfterViewInit, AfterViewChecked   {

	public courses: string[] = [];

    @ViewChild('list') list: ElementRef;

    addCourses(course: string){
    	this.courses.push(course);
    }

    constructor () {
    	console.log("constructor");
    }

    ngOnInit() {
      this.courses = ['Angular', 'TypeScript', 'NodeJS'];
      console.log("ngOnInit");
    }

    ngAfterViewInit() {
      console.log("ngAfterViewInit");
      // this.list.nativeElement.style.backgroundColor = "pink";
    }

	  ngAfterViewChecked(){
      console.log("ngAfterViewChecked");
      if(this.list.nativeElement.childElementCount %2 == 0) {
        this.list.nativeElement.style.backgroundColor = "pink";
      }else{
        this.list.nativeElement.style.backgroundColor = "green";
      }
    }

}
