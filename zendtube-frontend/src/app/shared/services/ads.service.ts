import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';

import { Ads } from './../defines/ads.class';
import { AppSetting } from './../../app.setting';

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
    this.ads = this._db.list(AppSetting.TBL_ADS) as AngularFireList<Ads>;
    return this.ads;
  }

  getItemById(key: string): AngularFireObject<Ads> {
    this.adsObjectDetails = this._db.object(AppSetting.TBL_ADS + key) as AngularFireObject<Ads>;
    return this.adsObjectDetails;
  }

  getItemByPosition(position: string): AngularFireList<Ads> {
    return this._db.list(AppSetting.TBL_ADS,
    ref => ref.orderByChild('position').equalTo(position));
  }
}
