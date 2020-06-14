import { Component, OnInit, Input } from '@angular/core';

import { Playlist } from '../../shared/defines/playlist.class';
import { VideoService } from '../../shared/services/video.service';
import { PlaylistService } from '../../shared/services/playlist.service';
import { Video } from '../../shared/defines/video.class';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'zvn-elm-playlist-load-more',
  templateUrl: './elm-playlist-load-more.component.html',
})
export class ElmPlaylistLoadMoreComponent implements OnInit {
  @Input('playlistID') playlistID: string;
  @Input('layout') layout: string;

  playlistInfo: Playlist         = null;
  items: Video[]                 = [];
  limit: BehaviorSubject<number> = null;
  lastKey: string                = null;
  queryAble: boolean             = true;

  constructor(
    private _videoService: VideoService,
    private _playlistService: PlaylistService,
  ) {
  }

  ngOnInit() {
    this.limit = new BehaviorSubject<number>(3);
    this.initData();
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
    if(this.playlistID && this.limit) {
      this.limit.subscribe(count => {
        this._videoService.getItemsScrollByPlaylistID(this.playlistID, count).snapshotChanges().subscribe(res => {
          this.items.length = 0;
          res.forEach(t => {
            const item = t.payload.toJSON();
            item['$key'] = t.key;
            this.items.push(item as Video);
          });
          console.log('getItems fetched successfully');
          console.log(this.items);
        }, err => {
          debugger;
          console.log(`An error occurred ${err}`);
        });
      });
    }
  }

  initData() {
    this.getItemByID();
    this.getItemsByPlaylistID();
  }

  loadMore() {
    this.limit.next(this.limit.getValue() + 3);
  }
}
