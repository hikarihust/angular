import { Component, OnInit } from '@angular/core';
import { VideoService } from './../services/video.service';

@Component({
	selector: 'zvn-project-youtube',
  templateUrl: './../templates/youtube.component.html',
  providers: [ VideoService ]
})
export class YoutubeComponent implements OnInit {

	constructor(
    private _videoService: VideoService
  ) {

  }

  ngOnInit() {
    console.log(this._videoService.getCurrentVideo());
  }
}
