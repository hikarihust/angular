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
  errorMessage: string;
	subscription: Subscription;
	album: any;

	constructor(
  		private _routerService: Router,
  		private _activatedRouteService: ActivatedRoute,
  		private _spotifyService: SpotifyService,
	) {

	}

	ngOnInit(){
		this.subscription = this._activatedRouteService.params.subscribe(
			(params: Params) => {
        this._spotifyService.getAlbum(params['id']).subscribe(
          (data: any) => this.album = data,
          (error: any) =>  this.errorMessage = error
        );
			}
		);
	}


	ngOnDestroy(){
		this.subscription.unsubscribe();
	}


}
