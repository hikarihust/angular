import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VideoService } from './../services/video.service';
import { Video } from './../class/video.class';

@Component({
	selector: 'zvn-project-outline',
	templateUrl: './../templates/outline.component.html',
})
export class OutlineComponent implements OnInit {
  videos: Video[] = [];
  @Input('currentVideo') currentVideo: Video;
  @Output('changeVideo') changeVideo = new EventEmitter<Video>();

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

	aClick(video: Video) {
    video.seen = true;
    this.changeVideo.emit(video);
  }

  ckbClick(event: any, video: Video) {
    video.seen = !video.seen;
    event.stopPropagation();
  }
}
