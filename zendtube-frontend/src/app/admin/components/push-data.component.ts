import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'zvn-admin-push-data',
  templateUrl: './../templates/push-data.component.html',
})
export class PushDataComponent implements OnInit {
  constructor(db: AngularFireDatabase) {
  }
  ngOnInit() {
  }
}
