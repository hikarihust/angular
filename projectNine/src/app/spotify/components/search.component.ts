import { Component, OnInit } from '@angular/core';

import { IArtist } from './../defines/artist.interface';

// Service
import { SpotifyService } from './../services/spotify.service';

@Component({
	selector: 'zvn-spotify-search',
	templateUrl: './../templates/search.component.html'
})

export class SearchComponent implements OnInit {
	errorMessage: string;
	searchValue: string;
	artists: IArtist[];
	flagDisabled: boolean = true;

	constructor(
  		private _spotifyService: SpotifyService,
	) {

	}

	ngOnInit(){
	}

	setActiveButton(){
		this.flagDisabled = true;
		if(this.searchValue.length >= 3) {
			this.flagDisabled = false;
		}
	}

	loadArtists(){
    this._spotifyService.searchArtists(this.searchValue).subscribe(
      (data: any) => this.artists = data.artists.items,
      (error: any) =>  this.errorMessage = error
    );
	}
}
