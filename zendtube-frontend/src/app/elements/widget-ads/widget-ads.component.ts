import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Ads } from './../../shared/defines/ads.class';
import { AdsService } from './../../shared/services/ads.service';

@Component({
  selector: '[zvn-widget-ads]',
  templateUrl: './widget-ads.component.html',
})
export class WidgetAdsComponent implements OnInit {
  @Input('zvn-widget-ads') position: string;

  ads: Ads[] = [];
  adsDetails: Ads;
  item: Ads;

  // size$: BehaviorSubject<string|null>;
  constructor(
    private _db: AngularFireDatabase,
    private _adsService: AdsService
  ) {
  }
  ngOnInit() {
    /*
    this._db.object('/ads/-M8eBiIpsU9HxQ_BUrRa').snapshotChanges().subscribe(data => {
      console.log(data.type);
      console.log(data.key);
      console.log(data.payload.val());
    });
    */

    /*
    this._db.list('/ads', ref => ref.orderByChild('position').equalTo(this.position)).snapshotChanges().subscribe(data => {
      console.log(data);
    });
    */

    /*
    const position$ = new Subject<string>();
    const queryObservable = position$.pipe(
      switchMap(position =>
        this._db.list('/ads', ref => ref.orderByChild('position').equalTo(position)).valueChanges()
      )
    );

    // subscribe to changes
    queryObservable.subscribe(queriedItems => {
      console.log(queriedItems);
    });

    // trigger the query
    position$.next(this.position);
    */

    /*
    this._adsService.getAll().snapshotChanges().subscribe(res => {
      this.ads.length = 0;
      res.forEach(t => {
        const item = t.payload.toJSON();
        item['key'] = t.key;
        this.ads.push(item as Ads);
      });
      console.log("getAll fetched successfully");
      console.log(this.ads);
    }, err => {
      debugger;
      console.log("An error occurred");
    });
    */
    this.getItemByPosition(this.position);
  }

  getItemById(id: string) {
    this._adsService.getItemById(id).snapshotChanges().subscribe(res => {
      if (res.payload.exists()) {
        this.adsDetails = res.payload.toJSON() as Ads;
        this.adsDetails.key = res.key;
        console.log('getItemById successfully');
      } else {
        console.log('Unknown error');
      }
      return res;
    });
  }

  getItemByPosition(position: string) {
    this._adsService.getItemByPosition(position).snapshotChanges().subscribe(res => {
      if (res[0].payload.exists()) {
        this.item = res[0].payload.toJSON() as Ads;
        this.item.key = res[0].key;
        console.log("getItemByPosition fetched successfully");
      } else {
        console.log('Unknown error');
      }
      return res;
    });
  }
}
