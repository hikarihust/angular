import { Component, OnInit, Input } from '@angular/core';

import { Playlist } from './../../shared/defines/playlist.class';
import { VideoService } from './../../shared/services/video.service';
import { PlaylistService } from './../../shared/services/playlist.service';
import { Video } from './../../shared/defines/video.class';

@Component({
  selector: 'zvn-elm-playlist',
  templateUrl: './elm-playlist.component.html',
})
export class ElmPlaylistComponent implements OnInit {
  @Input('playlistID') playlistID: string;
  @Input('layout') layout: string;
  @Input('totalItems') totalItems: number = 2;

  playlistInfo: Playlist = null;
  items: Video[] = [];

  constructor(
    private _videoService: VideoService,
    private _playlistService: PlaylistService,
  ) {
  }

  ngOnInit() {
    this.getItemByID();
    this.getItemsByPlaylistID();
  }

  changeLayout(data: any) {
    this.layout = data;
  }

  // Get playlist Info
  getItemByID() {
    if (this.playlistID) {
      this._playlistService.getItemByID(this.playlistID).snapshotChanges()
        .subscribe(res => {
          if ((res[0].payload.exists())) {
            console.log("Playlist fetched successfully");
            const playlistInfo = res[0].payload.toJSON() as Playlist;
            playlistInfo['$key'] = res[0].key;
            this.playlistInfo = playlistInfo;
          } else {
            console.log("Playlist does not exist");
          }
        }, err => {
          console.log(err.toString());
          debugger;
        });
    }
  }

  // Get videos in playlist
  getItemsByPlaylistID() {
    this._videoService.getItemsByPlaylistID(this.playlistID, +(this.totalItems)).snapshotChanges().subscribe(res => {
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
