import { Component, OnInit } from '@angular/core';

import { Video } from './../../shared/defines/video.class';
import { VideoService } from './../../shared/services/video.service';

@Component({
  selector: '[zvn-widget-popular-video]',
  templateUrl: './widget-popular-video.component.html',
})
export class WidgetPopularVideoComponent implements OnInit {
  items: Video[] = [];

  constructor(
    private _videoService: VideoService
  ) {
  }

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this._videoService.getItemsPopular().snapshotChanges().subscribe(res => {
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
