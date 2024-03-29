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
  cookieIDs: string[] = [];
  currentVideo: Video;

	constructor(
    private _videoService: VideoService,
    private _cookieService: CookieService
		) {
  }

  // putCookie() {
  //   let videoIDs: string[] = ["sDuqdfhtgwU", "mysGwkVkxuE"];
  //   this._cookieService.set(KEY_COOKIE_VIDEO_IDS, JSON.stringify(videoIDs));
  // }

  // getCookie() {
  //   let stringIDs = this._cookieService.get(KEY_COOKIE_VIDEO_IDS)
  //   console.log(JSON.parse(stringIDs));
  // }

  // removeCookie() {
  //   this._cookieService.delete(KEY_COOKIE_VIDEO_IDS);
  // }

  ngOnInit() {
    this.videos = this._videoService.getVideos();
    this.currentVideo = this._videoService.getCurrentVideo();
    this.sync();
  }

	setClass(video: Video) {
		return {
      'seen'	: video.seen == true,
      'active': video.id == this.currentVideo.id
		}
  }

	aClick(video: Video) {
    video.seen = true;

    this.addVideoToCookieArray(video);
    this.saveCookie();

    this._videoService.setCurrentVideo(video);
    this.currentVideo = this._videoService.getCurrentVideo();
  }

  ckbClick(event: any, video: Video) {
		if(video.seen == true) { // đã xem
			this.removeVideoFromCookieArray(video);
		}else { // chưa xem
			this.addVideoToCookieArray(video);
    }

    video.seen = !video.seen;
    this.saveCookie();
    event.stopPropagation();
  }

	removeVideoFromCookieArray(video: Video){
		let index = this.cookieIDs.indexOf(video.id);
		if(index!=-1){
			this.cookieIDs.splice(index, 1);
		}
	}

	addVideoToCookieArray(video: Video){
		if(this.cookieIDs.indexOf(video.id)==-1){
			this.cookieIDs.push(video.id);
		}
	}

	saveCookie(){
		this._cookieService.set(KEY_COOKIE_VIDEO_IDS, JSON.stringify(this.cookieIDs));
	}

	sync() {
    let stringIDs = this._cookieService.get(KEY_COOKIE_VIDEO_IDS);
    if(stringIDs) {
      this.cookieIDs = JSON.parse(stringIDs);
			if(this.cookieIDs.length > 0) {
				for (let i = 0; i < this.videos.length; i++) {
					if(this.cookieIDs.indexOf(this.videos[i].id) != -1){
						this.videos[i].seen = true;
					}
				}
			}
    } else {
      this.videos.forEach((video:Video) => video.seen = false);
    }
	}
}
