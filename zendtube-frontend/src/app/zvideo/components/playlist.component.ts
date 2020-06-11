import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'zvn-zvideo-playlist',
  templateUrl: './../templates/playlist.component.html',
})
export class PlaylistComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  playlistID: string;
  layoutDefault: string = 'grid';
  
  constructor(
    private _activatedRouteService: ActivatedRoute
  ) {
  }
  ngOnInit() {
		this.subscription = this._activatedRouteService.params.subscribe(
			(params: Params) => {
        this.playlistID = params['id'];
        console.log(this.playlistID);
			}
    );
  }

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}
}
