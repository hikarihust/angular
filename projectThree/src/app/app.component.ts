import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `
  //   <h1>My Application</h1>
  //   <!-- <zvn-variable></zvn-variable> -->
  //   <zvn-input
  //     [mtitle]="title"
  //     [mdescription]="description"
  //     ></zvn-input>
  // `,
  templateUrl: './app.component.html',
  // styles: [`.an2Cls {
  //   background-color: red;
  // }
  // .tsCls {
  //     background-color: yellow;
  // }`],
  styleUrls: ['../template/app.component.css']
})
export class AppComponent {
  title = 'project 3 -Input Properties';

  description: string = "Project 03 - Input Properties - Description";

	answer($event) : void {
		console.log($event);
  }

  componentTitle: string = "AppComponent";
  // resetColor: string = "#000804";
  resetColor: string = "#000804";

	changeColor($event) {
		this.resetColor = $event;
  }

  // funcResetColor() {
  //   this.resetColor = "#000804";
  // }
}
