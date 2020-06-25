import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import 'rxjs/operators'
import { take, first, last, timeInterval } from 'rxjs/operators';

interface Data {
  hum: number,
  temp: number,
  time?: Date
}

@Component({
  selector: 'app-tempdisplay',
  templateUrl: './tempdisplay.component.html',
  styleUrls: ['./tempdisplay.component.css']
})
export class TempdisplayComponent implements OnInit {

  colData: AngularFirestoreCollection<Data>;
  temps$: Observable<Data[]>;
  othertemps: Data[];

  tempnowC: number;
  tempnowF: number;
  datenow: number;

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.tempnowC = 0;
    this.tempnowF = 0;

    // Sets the clock
    this.datenow = Date.now()
    setInterval(() => {
      this.datenow = Date.now()
    }, 1000);

    this.colData = this.afs.collection('data', ref => {
      return ref.orderBy('time', 'desc').limit(15)
    })

    this.temps$ = this.colData.valueChanges()

    this.temps$.subscribe(data => {
      if(data[0]){
        var tempc = parseFloat(data[0].temp.toFixed(2));
        var tempf = (tempc * 9/5) + 32.0;
        tempf = parseFloat(tempf.toFixed(2))

        this.tempnowC = tempc;
        this.tempnowF = tempf;
      }
      
      this.othertemps = data;
      this.othertemps.shift();
    })

  }

  formatTime(time, prefix = "") {
    return typeof time == "object" ? prefix + time.toLocaleDateString() : "";
  }

}
