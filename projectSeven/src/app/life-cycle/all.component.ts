import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
	selector: 'zvn-lifecycle-all',
  template: `
    ABC
	`
})

export class AllComponent implements OnInit, OnChanges {
	constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngDoCheck(){
		console.log("ngDoCheck");
  }

	ngAfterContentInit(){
		console.log("ngAfterContentInit");
	}

	ngAfterContentChecked(){
		console.log("ngAfterContentChecked");
  }

	ngAfterViewInit(){
		console.log("ngAfterViewInit");
  }

	ngAfterViewChecked(){
		console.log("ngAfterViewChecked");
	}

	ngOnDestroy(){
		console.log("ngOnDestroy");
	}
}
