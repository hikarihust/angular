import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';

import { Subscription } from 'rxjs';

import { IArtist } from './../defines/artist.interface';
import { IAlbum } from './../defines/album.interface';
// Service
import { SpotifyService } from './../services/spotify.service';

@Component({
	selector: 'zvn-album',
	templateUrl: './../templates/album.component.html'
})

export class AlbumComponent implements OnInit, OnDestroy {
	subscription: Subscription;
	album: IAlbum;

	constructor(
  		private _routerService: Router,
  		private _activatedRouteService: ActivatedRoute,
  		private _spotifyService: SpotifyService,
	) {

	}

	ngOnInit(){
		this.subscription = this._activatedRouteService.params.subscribe(
			(params: Params) => {
			}
		);
	}


	ngOnDestroy(){
		this.subscription.unsubscribe();
	}


}
