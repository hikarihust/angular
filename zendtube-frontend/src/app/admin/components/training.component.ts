import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'zvn-admin-training',
  templateUrl: './../templates/training.component.html',
})
export class TrainingComponent implements OnInit {
  items: Observable<any[]>;
  item: Observable<any>;
  itemRef: AngularFireObject<any>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items').valueChanges();
    this.item = db.object('/items/sefrftgt').valueChanges();

    // Remove data
    // const promise = db.object('/items/abc').remove();
    // promise
    //   .then(_ => console.log('success'))
    //   .catch(err => console.log(err, 'You dont have access!'));

    // Saving data
    // const itemRef = db.object('/items/abc');
    // itemRef.set({ id: 3, ordering: 200, name: 'typescript'});

    // Updating data
    // const itemRef = db.object('/items/abc');
    // itemRef.update({ ordering: 150 });
  }
  ngOnInit() {
  }
}
