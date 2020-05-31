import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { dbAds } from './../../../environments/db-ads';

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
    const adsRef = this._db.list("ads");

    dbAds.ads.forEach((ads: any) => {
      adsRef.push(ads);
    });
  }
}
