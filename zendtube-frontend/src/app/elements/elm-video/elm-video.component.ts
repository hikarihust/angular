import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[zvn-elm-video]',
  templateUrl: './elm-video.component.html',
})
export class ElmVideoComponent implements OnInit {
  @Input("show-desc") showDesc: boolean = false;
  constructor() {
  }
  ngOnInit() {
  }
}
