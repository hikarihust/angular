import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Ads } from 'src/app/shared/defines/ads.class';

@Component({
  selector: '[zvn-widget-ads]',
  templateUrl: './widget-ads.component.html',
})
export class WidgetAdsComponent implements OnInit {
  @Input('zvn-widget-ads') position: string;

  // item: Observable<any>;

  // size$: BehaviorSubject<string|null>;
  constructor(
    private _db: AngularFireDatabase
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
  }
}
