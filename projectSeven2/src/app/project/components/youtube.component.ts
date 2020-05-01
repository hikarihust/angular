import { Component, OnInit } from '@angular/core';
import { VideoService } from './../services/video.service';
import { Video } from './../class/video.class';

@Component({
	selector: 'zvn-project-youtube',
  templateUrl: './../templates/youtube.component.html',
  providers: [ VideoService ]
})
export class YoutubeComponent {

	constructor() {
  }
}
