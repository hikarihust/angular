import { Component, OnInit, Input } from '@angular/core';

import { Playlist } from './../../shared/defines/playlist.class';
import { VideoService } from './../../shared/services/video.service';
import { PlaylistService } from './../../shared/services/playlist.service';

@Component({
  selector: 'zvn-elm-playlist',
  templateUrl: './elm-playlist.component.html',
})
export class ElmPlaylistComponent implements OnInit {
  @Input('playlistID') playlistID: string;
  @Input('layout') layout: string;

  playlistInfo: Playlist = null;
  constructor(
    private _videoService: VideoService,
    private _playlistService: PlaylistService,
  ) {
  }

  ngOnInit() {
    this.getItemByID();
  }

  changeLayout(data: any) {
    this.layout = data;
  }

  getItemByID() {
    if (this.playlistID) {
      this._playlistService.getItemByID(this.playlistID).snapshotChanges()
        .subscribe(res => {
          if ((res[0].payload.exists())) {
            console.log("Playlist fetched successfully");
            const playlistInfo = res[0].payload.toJSON() as Playlist;
            // playlistInfo['$key'] = res.key;
            this.playlistInfo = playlistInfo;
            console.log(this.playlistInfo);
          } else {
            console.log("Playlist does not exist");
          }
        }, err => {
          console.log(err.toString());
          debugger;
        });
    }
  }
}
