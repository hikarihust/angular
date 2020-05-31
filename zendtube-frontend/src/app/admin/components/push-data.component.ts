import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { dbAds } from './../../../environments/db-ads';
import { dbPlaylist } from './../../../environments/db-playlist';

@Component({
  selector: 'zvn-admin-push-data',
  templateUrl: './../templates/push-data.component.html',
})
export class PushDataComponent implements OnInit {
  constructor(
    private _db: AngularFireDatabase) {
  }
  ngOnInit() {
  }

  onPushData() {
    // Ads
    /*
    const adsRef = this._db.list("ads");

    dbAds.ads.forEach((ads: any) => {
      adsRef.push(ads);
    });
    */

    // Playlist
    /*
    const PlaylistRef = this._db.list("playlist");
    dbPlaylist.playlist.forEach((playlist: any) => {
      PlaylistRef.push({
        id         : playlist.id,
        channelId  : playlist.channelId,
        title      : playlist.title,
        slug       : playlist.slug,
        description: playlist.description,
        thumbnails : playlist.thumbnails,
      });
    });
    */

    // Video
    const videoRef = this._db.list("video");
    dbPlaylist.playlist.forEach((playlist: any) => {
      playlist.items.forEach((video: any) => {
        videoRef.push({
          id          : video.id,
          publishedAt : video.publishedAt,
          channelId   : video.channelId,
          playlistId  : video.playlistID,
          title       : video.title,
          slug        : video.slug,
          description : video.description,
          thumbnails  : video.thumbnails,
          views       : this.getRandomInt(1, 500),
          comments    : this.getRandomInt(1, 10),
          ratings     : this.getRandomInt(1, 100),
          featured    : (this.getRandomInt(1, 5)==2) ? true :false
        });
      });
    });
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
