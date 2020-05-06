import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';

import { Subscription } from 'rxjs';
import { IArtist } from './../defines/artist.interface';
import { IAlbum } from './../defines/album.interface';
// Service
import { SpotifyService } from './../services/spotify.service';

@Component({
	selector: 'zvn-artist',
	templateUrl: './../templates/artist.component.html'
})

export class ArtistComponent implements OnInit, OnDestroy {
  errorMessage: string;
	searchValue: string;
	artist: any;
	albums: IAlbum[] = [];
	subscription: Subscription;

	constructor(
  		private _routerService: Router,
  		private _activatedRouteService: ActivatedRoute,
  		private _spotifyService: SpotifyService,
	) {

	}

	ngOnInit(){
		this.subscription = this._activatedRouteService.params.subscribe(
			(params: Params) => {
        this._spotifyService.getArtist(params['id']).subscribe(
          (data: any) => this.artist = data,
          (error: any) =>  this.errorMessage = error
        );

        this._spotifyService.getAlbums(params['id']).subscribe(
          (data: any) => this.albums = data.items,
          (error: any) =>  this.errorMessage = error
        );
			}
		);
	}

	loadUser(){

	}

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}


}
