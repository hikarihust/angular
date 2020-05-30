import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'zvn-admin-training',
  templateUrl: './../templates/training.component.html',
})
export class TrainingComponent implements OnInit {
  items: Observable<any[]>;
  item: Observable<any>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items').valueChanges();
    this.item = db.object('/items/sefrftgt').valueChanges();
  }
  ngOnInit() {
  }
}
