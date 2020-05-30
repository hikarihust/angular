import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'zvn-admin-training',
  templateUrl: './../templates/training.component.html',
})
export class TrainingComponent implements OnInit {
  constructor(firestore: AngularFirestore) {
  }
  ngOnInit() {
  }
}
