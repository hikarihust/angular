import { Component, OnInit } from '@angular/core';

import { Playlist } from './../../shared/defines/playlist.class';
import { PlaylistService } from './../../shared/services/playlist.service';

@Component({
  selector: '[zvn-widget-playlist]',
  templateUrl: './widget-playlist.component.html',
})
export class WidgetPlaylistComponent implements OnInit {

  items: Playlist[] = [];
  constructor(
    private _playlistService: PlaylistService
  ) {
  }
  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this._playlistService.getItems().snapshotChanges().subscribe(res => {
      this.items.length = 0;
      res.forEach(t => {
        const item = t.payload.toJSON();
        item['$key'] = t.key;
        this.items.push(item as Playlist);
      });
      console.log('getItems fetched successfully');
      console.log(this.items);
    }, err => {
      debugger;
      console.log(`An error occurred ${err}`);
    });
  }
}
