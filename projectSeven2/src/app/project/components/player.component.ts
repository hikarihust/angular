import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Video } from './../class/video.class';

@Component({
	selector: 'zvn-project-player',
	templateUrl: './../templates/player.component.html',
})
export class PlayerComponent implements OnInit, OnChanges {
  @Input('currentVideo') currentVideo: Video
  videoId: string = "";

	constructor() {

  }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  ngOnChanges() {
    this.videoId = this.currentVideo.id;
  }
}
