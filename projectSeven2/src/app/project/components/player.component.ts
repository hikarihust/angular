import { Component, OnInit, Input } from '@angular/core';
import { Video } from './../class/video.class';

@Component({
	selector: 'zvn-project-player',
	templateUrl: './../templates/player.component.html',
})
export class PlayerComponent implements OnInit {
  @Input('currentVideo') currentVideo: Video

	constructor() {

  }

  ngOnInit() {
    console.log(this.currentVideo);
  }
}
