import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';

import { Playlist } from './../defines/playlist.class';
import { AppSetting } from './../../app.setting';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  playlists: AngularFireList<Playlist>;
  playlist: AngularFireList<Playlist>;

  constructor(private _db: AngularFireDatabase) {
  }

  getItems(): AngularFireList<Playlist> {
    this.playlists = this._db.list(AppSetting.TBL_PLAYLIST, ref => ref.limitToFirst(4)) as AngularFireList<Playlist>;
    return this.playlists;
  }

  getItemByID(playlistID: string): AngularFireList<Playlist> {
    this.playlist = this._db.list(AppSetting.TBL_PLAYLIST, ref => ref.orderByChild('id').equalTo(playlistID)) as AngularFireList<Playlist>;
    return this.playlist;
  }
}
