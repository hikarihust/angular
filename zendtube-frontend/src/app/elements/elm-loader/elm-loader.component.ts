import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zvn-elm-loader',
  templateUrl: './elm-loader.component.html',
})
export class ElmLoaderComponent implements OnInit {
  @Input("isLoading") isLoading: boolean = true;
  constructor() {
  }
  ngOnInit() {
  }
}
