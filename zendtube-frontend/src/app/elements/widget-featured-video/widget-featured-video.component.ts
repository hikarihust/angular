import { Component, OnInit } from '@angular/core';

import { Video } from './../../shared/defines/video.class';
import { VideoService } from './../../shared/services/video.service';

@Component({
  selector: '[zvn-widget-featured-video]',
  templateUrl: './widget-featured-video.component.html',
})
export class WidgetFeaturedVideoComponent implements OnInit {
  items: Video[] = [];

  constructor(
    private _videoService: VideoService
  ) {
  }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this._videoService.getItemsFeatured().snapshotChanges().subscribe(res => {
      this.items.length = 0;
      res.forEach(t => {
        const item = t.payload.toJSON();
        item['$key'] = t.key;
        this.items.push(item as Video);
      });
      console.log('getItems fetched successfully');
    }, err => {
      debugger;
      console.log(`An error occurred ${err}`);
    });
  }
}
