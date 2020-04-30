import { Component, OnInit } from '@angular/core';
import { VideoService } from './../services/video.service';
import { Video } from './../class/video.class';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'zvn-project-youtube',
  templateUrl: './../templates/youtube.component.html',
  providers: [ VideoService, CookieService ]
})
export class YoutubeComponent implements OnInit {

  currentVideo: Video;

	constructor(
    private _videoService: VideoService,
    private _cookieService: CookieService
  ) {

  }

  ngOnInit() {
    this.currentVideo = this._videoService.getCurrentVideo();
    console.log(this._cookieService);
  }

  onChangeVideo(event: Video) {
    this.currentVideo = event;
  }
}
