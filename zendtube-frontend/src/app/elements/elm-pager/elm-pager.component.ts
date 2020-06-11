import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[zvn-elm-pager]',
  templateUrl: './elm-pager.component.html',
})
export class ElmPagerComponent implements OnInit {
  @Input("zvn-elm-pager") pager: any = null;

  ngOnInit() {
    console.log("ElmPagerComponent");
    console.log(this.pager);
  }
}
