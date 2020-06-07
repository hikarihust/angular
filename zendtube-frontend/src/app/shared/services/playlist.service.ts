import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';

import { Playlist } from './../defines/playlist.class';
import { AppSetting } from './../../app.setting';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private _db: AngularFireDatabase) {
  }

  getItems(): AngularFireList<Playlist[]> {
    return this._db.list(AppSetting.TBL_PLAYLIST, ref => ref.limitToFirst(4)) as AngularFireList<Playlist[]>;
  }

  getItemByID(playlistID: string): AngularFireList<Playlist[]> {
    return this._db.list(AppSetting.TBL_PLAYLIST, ref => ref.orderByChild('id').equalTo(playlistID)) as AngularFireList<Playlist[]>;
  }
}
