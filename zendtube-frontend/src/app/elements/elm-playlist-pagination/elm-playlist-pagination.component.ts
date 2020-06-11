import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { Playlist } from '../../shared/defines/playlist.class';
import { VideoService } from '../../shared/services/video.service';
import { PlaylistService } from '../../shared/services/playlist.service';
import { Video } from '../../shared/defines/video.class';
import { PagerService } from './../../shared/services/pager.service';

@Component({
  selector: 'zvn-elm-playlist-pagination',
  templateUrl: './elm-playlist-pagination.component.html',
})
export class ElmPlaylistPaginationComponent implements OnInit, OnChanges, OnDestroy {
  @Input('playlistID') playlistID: string;
  @Input('layout') layout: string;
  @Input('totalItems') totalItems: number = 2;
  @Input('showMoreVideo') showMoreVideo: boolean = true;

  playlistInfo: Playlist = null;
  items: Video[] = [];
  pager: any;
  subscription: Subscription;

  constructor(
    private _activatedRouteService: ActivatedRoute,
    private _videoService: VideoService,
    private _playlistService: PlaylistService,
    private _pagerService: PagerService
  ) {
  }

  ngOnInit() {
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
    this._videoService.getItemsPaginationByPlaylistID(this.playlistID).snapshotChanges().subscribe(res => {
      this.items.length = 0;
      res.forEach(t => {
        const item = t.payload.toJSON();
        item['$key'] = t.key;
        this.items.push(item as Video);
      });
      console.log('getItems fetched successfully');
      this.subscription = this._activatedRouteService.queryParams.subscribe(
        (params: Params) => {
          this.pager = this._pagerService.getPager(this.items.length, +(params['page']), 5);
        }
      );
    }, err => {
      debugger;
      console.log(`An error occurred ${err}`);
    });
  }

  initData() {
    this.getItemByID();
    this.getItemsByPlaylistID();
  }

  ngOnChanges(){
    this.initData();
  }
  
	ngOnDestroy(){
		this.subscription.unsubscribe();
	}
}
