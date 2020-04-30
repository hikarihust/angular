import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VideoService } from './../services/video.service';
import { KEY_COOKIE_VIDEO_IDS } from './../defines/cookie';
import { Video } from './../class/video.class';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'zvn-project-outline',
  templateUrl: './../templates/outline.component.html',
  providers: [ CookieService ]
})
export class OutlineComponent implements OnInit {
  videos: Video[] = [];
  @Input('currentVideo') currentVideo: Video;
  @Output('changeVideo') changeVideo = new EventEmitter<Video>();

	constructor(
    private _videoService: VideoService,
    private _cookieService: CookieService
		) {
  }

  putCookie() {
    let videoIDs: string[] = ["hCoZpTg8kyY", "mysGwkVkxuE"];
    this._cookieService.set(KEY_COOKIE_VIDEO_IDS, JSON.stringify(videoIDs));
  }

  getCookie() {
    let stringIDs = this._cookieService.get(KEY_COOKIE_VIDEO_IDS)
    console.log(JSON.parse(stringIDs));
  }

  removeCookie() {
    this._cookieService.delete(KEY_COOKIE_VIDEO_IDS);
  }


  ngOnInit() {
    this.videos = this._videoService.getVideos();
    console.log(this._cookieService);
  }

	setClass(video: Video) {
		return {
      'seen'	: video.seen == true,
      'active': video.id == this.currentVideo.id
		}
  }

	aClick(video: Video) {
    video.seen = true;
    this.changeVideo.emit(video);
  }

  ckbClick(event: any, video: Video) {
    video.seen = !video.seen;
    event.stopPropagation();
  }
}
