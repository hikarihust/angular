import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { Video } from './../class/video.class';
import { VideoService } from './../services/video.service';

@Component({
	selector: 'zvn-project-player',
	templateUrl: './../templates/player.component.html',
})
export class PlayerComponent implements OnInit, AfterContentChecked {
  currentVideo: Video;

	constructor(
    private _videoService: VideoService
		) {
  }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.currentVideo = this._videoService.getCurrentVideo();
  }

  ngAfterContentChecked() {
    this.currentVideo = this._videoService.getCurrentVideo();
  }
}
