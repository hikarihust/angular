import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';

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
}
