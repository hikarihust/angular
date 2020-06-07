import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zvn-zvideo-home',
  templateUrl: './../templates/home.component.html',
})
export class HomeComponent implements OnInit {
  playlistsInfo: any[];

  constructor() {
  }
  ngOnInit() {
    this.playlistsInfo = [
      {
        'playlistID': 'PLv6GftO355Avn86HCfkNnTLeOckiXZ603',
        'layoutType': 'grid'
      },
      {
        'playlistID': 'PLv6GftO355AsMUZXqKY_IFsNahY1txNXS',
        'layoutType': 'hdgrid'
      },
      {
        'playlistID': 'PLv6GftO355AvoxffFOtyfH8eDUvEBAR1r',
        'layoutType': 'list'
      },
      {
        'playlistID': 'PLv6GftO355Aue6eFwcf-GirTEzuD-99nu',
        'layoutType': 'hdlist'
      }
    ]
  }
}
