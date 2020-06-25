import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temp-card',
  templateUrl: './temp-card.component.html',
  styleUrls: ['./temp-card.component.css']
})
export class TempCardComponent implements OnInit {

  @Input()
  tempf: number;

  @Input()
  tempc: number;

  constructor() { }

  ngOnInit(): void {
  }

}
