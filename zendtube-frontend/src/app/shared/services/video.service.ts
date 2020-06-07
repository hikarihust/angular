import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';

import { Video } from '../defines/video.class';
import { AppSetting } from './../../app.setting';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  video: AngularFireList<Video>;

  constructor(private _db: AngularFireDatabase) {
  }

  getItemsFeatured(): AngularFireList<Video> {
    this.video = this._db.list(AppSetting.TBL_VIDEO, ref => ref.orderByChild('featured').equalTo(true).limitToFirst(4)) as AngularFireList<Video>;
    return this.video;
  }

  getItemsPopular(): AngularFireList<Video> {
    this.video = this._db.list(AppSetting.TBL_VIDEO, ref => ref.orderByChild('views').limitToLast(3)) as AngularFireList<Video>;
    return this.video;
  }
}
