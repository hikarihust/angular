import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import {database} from 'firebase';

import { Ads } from './../defines/ads.class';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  ads: AngularFireList<Ads>;
  adsObjectDetails: AngularFireObject<Ads>;
  adsListDetails: AngularFireList<Ads>;

  constructor(private _db: AngularFireDatabase) {
  }

  getAll(): AngularFireList<Ads> {
    this.ads = this._db.list('/ads') as AngularFireList<Ads>;
    return this.ads;
  }

  getItemById(key: string): AngularFireObject<Ads> {
    this.adsObjectDetails = this._db.object('/ads/' + key) as AngularFireObject<Ads>;
    return this.adsObjectDetails;
  }

  getItemByPosition(position: string): AngularFireList<Ads> {
    this.adsListDetails = this._db.list('ads',
    ref => ref.orderByChild('position').equalTo(position));
    return this.adsListDetails;
  }
}
