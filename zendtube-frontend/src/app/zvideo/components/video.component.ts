import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Video } from './../../shared/defines/video.class';
import { VideoService } from './../../shared/services/video.service';
import { Playlist } from './../../shared/defines/playlist.class';
import { PlaylistService } from './../../shared/services/playlist.service';

@Component({
  selector: 'zvn-zvideo-video',
  templateUrl: './../templates/video.component.html',
})
export class VideoComponent implements OnInit {
  videoID: string;
  videoInfo: Video = null;
  playlistInfo: Playlist = null;
  items: Video[] = [];
  layoutDefault: string = 'grid';

  constructor(
    private _activatedRouteService: ActivatedRoute,
    private _videoService: VideoService,
    private _playlistService: PlaylistService
  ) {
  }
  ngOnInit() {
    this.videoID = this._activatedRouteService.snapshot.params['id'];
    this.getItemByID();
  }

  // Video Info by videoID
  getItemByID() {
    if (this.videoID) {
      this._videoService.getItemByID(this.videoID).snapshotChanges()
        .subscribe(res => {
          if ((res[0].payload.exists())) {
            console.log("Video Info by videoID fetched successfully");
            const videoInfo = res[0].payload.toJSON() as Video;
            videoInfo['$key'] = res[0].key;
            this.videoInfo = videoInfo;
            // PlaylistInfo
            this.getPlaylistInfo(this.videoInfo.playlistId);
            // Videos
            this.getVideosByPlaylistID(this.videoInfo.playlistId);
          } else {
            console.log("Video Info by videoID does not exist");
          }
        }, err => {
          console.log(err.toString());
          debugger;
        });
    }
  }

  // PlaylistInfo by playlistID
  getPlaylistInfo(playlistId: string) {
    if (playlistId) {
      this._playlistService.getItemByID(playlistId).snapshotChanges()
        .subscribe(res => {
          if ((res[0].payload.exists())) {
            console.log("PlaylistInfo by playlistID fetched successfully");
            const playlistInfo = res[0].payload.toJSON() as Playlist;
            playlistInfo['$key'] = res[0].key;
            this.playlistInfo = playlistInfo;
          } else {
            console.log("PlaylistInfo by playlistID does not exist");
          }
        }, err => {
          console.log(err.toString());
          debugger;
        });
    }
  }

  // Get videos by playlistID
  getVideosByPlaylistID(playlistId: string) {
    this._videoService.getItemsByPlaylistID(playlistId, 3).snapshotChanges().subscribe(res => {
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

  changeLayout(data: any) {
    this.layoutDefault = data;
  }
}
