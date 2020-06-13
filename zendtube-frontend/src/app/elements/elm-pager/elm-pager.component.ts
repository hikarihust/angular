import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[zvn-elm-pager]',
  templateUrl: './elm-pager.component.html',
})
export class ElmPagerComponent implements OnInit {
  @Input("zvn-elm-pager") pager: any = null;
  @Output() setCurrentPage = new EventEmitter<number>();

  ngOnInit() {
    console.log("ElmPagerComponent");
    console.log(this.pager);
  }

  setPage(page: number) {
    this.setCurrentPage.emit(page);
  }
}
