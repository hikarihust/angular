import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { SearchComponent } from "./components/search.component";
import { ArtistComponent } from "./components/artist.component";
import { AlbumComponent } from "./components/album.component";


const spotifyRoutes: Routes = [
	{ path: 'spotify'	, component: SearchComponent },	
	{ path: 'artist/:id', component: ArtistComponent },
	{ path: 'album/:id', component: AlbumComponent } 
];

// SearchComponent -> ArtistComponent -> AlbumComponent
@NgModule({
	imports: [
		RouterModule.forChild(spotifyRoutes)
	],
	exports: [
		RouterModule
	]
})
export class SpotifyRoutingModule {}
