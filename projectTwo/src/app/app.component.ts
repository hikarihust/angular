import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <h1>My Application</h1> -->
    <!-- <my-sub></my-sub>
    <my-study-multi-abc></my-study-multi-abc> -->
    <my-binding></my-binding>
  `,
  // templateUrl: '../template/app.component.html',
  // styles: [`.an2Cls {
  //   background-color: red;
  // }
  // .tsCls {
  //     background-color: yellow;
  // }`],
  styleUrls: ['../template/app.component.css']
})
export class AppComponent {
  title = 'projectOne';
}
