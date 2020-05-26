import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[zvn-widget-ads]',
  templateUrl: './widget-ads.component.html',
})
export class WidgetAdsComponent implements OnInit {
  @Input('zvn-widget-ads') position: string;
  constructor() {
  }
  ngOnInit() {
    console.log(this.position);
  }
}
