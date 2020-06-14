import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import { BehaviorSubject } from 'rxjs';

import { Video } from '../defines/video.class';
import { AppSetting } from './../../app.setting';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private _db: AngularFireDatabase) {
  }

  getItemsFeatured(): AngularFireList<Video[]> {
    return this._db.list(AppSetting.TBL_VIDEO, ref => ref.orderByChild('featured').equalTo(true).limitToFirst(4)) as AngularFireList<Video[]>;
  }

  getItemsPopular(): AngularFireList<Video[]> {
    return this._db.list(AppSetting.TBL_VIDEO, ref => ref.orderByChild('views').limitToLast(3)) as AngularFireList<Video[]>;
  }

  getItemsByPlaylistID(playlistID: string, totalItems: number = 4): AngularFireList<Video[]> {
    return this._db.list(AppSetting.TBL_VIDEO, ref => ref.orderByChild('playlistId').equalTo(playlistID).limitToFirst(totalItems)) as AngularFireList<Video[]>;
  }
  
  getItemsPaginationByPlaylistID(playlistID: string): AngularFireList<Video[]> {
    return this._db.list(AppSetting.TBL_VIDEO, ref => ref.orderByChild('playlistId').equalTo(playlistID)) as AngularFireList<Video[]>;
  }

  getItemsScrollByPlaylistID(playlistID: string, totalItems: number = 3): AngularFireList<Video[]> {
    return this._db.list(AppSetting.TBL_VIDEO, ref => ref.orderByChild('playlistId').equalTo(playlistID).limitToFirst(totalItems)) as AngularFireList<Video[]>;
  }

  // Get all items By PlaylistID
  getAllItemsByPlaylistID(playlistID: string): AngularFireList<Video[]> {
    return this._db.list(AppSetting.TBL_VIDEO, ref => ref.orderByChild('playlistId').equalTo(playlistID)) as AngularFireList<Video[]>;
  }

  getItemByID(videoID: string): AngularFireList<Video> {
    return this._db.list(AppSetting.TBL_VIDEO, ref => ref.orderByChild('id').equalTo(videoID).limitToLast(1)) as AngularFireList<Video>;
  }
}
