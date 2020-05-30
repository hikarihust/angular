import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[zvn-elm-panel-title]',
  templateUrl: './elm-panel-title.component.html',
})
export class ElmPanelTitleComponent implements OnInit {
  @Input("zvn-elm-panel-title") title: string = null;
  @Input('layout') layout: string;
  constructor() {
  }
  ngOnInit() {
  }

  setActive(layout: string) {
    return {
      active: (layout==this.layout)
    };
  }
}
