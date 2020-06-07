import { Component, OnInit, Input } from '@angular/core';

import { Video } from 'src/app/shared/defines/video.class';

@Component({
  selector: '[zvn-elm-video]',
  templateUrl: './elm-video.component.html',
})
export class ElmVideoComponent implements OnInit {
  @Input("show-desc") showDesc: boolean = false;
  @Input("zvn-elm-video") item: Video = null;
  constructor() {
  }
  ngOnInit() {
  }
}
