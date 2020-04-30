import { Component, OnInit, Input } from '@angular/core';
import { VideoService } from './../services/video.service';
import { Video } from './../class/video.class';

@Component({
	selector: 'zvn-project-outline',
	templateUrl: './../templates/outline.component.html',
})
export class OutlineComponent implements OnInit {
  videos: Video[] = [];
  @Input('currentVideo') currentVideo: Video;

	constructor(
		private _videoService: VideoService
		) {
	}

  ngOnInit() {
    this.videos = this._videoService.getVideos();
    console.log(this.videos);
  }

	setClass(video: Video) {
		return {
      'seen'	: video.seen == true,
      'active': video.id == this.currentVideo.id
		}
	}
}
