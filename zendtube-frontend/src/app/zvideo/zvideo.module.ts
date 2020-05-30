import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { ZVideoRoutingModule } from './zvideo-routing.module';

// Module
import { ElementsModule } from './../elements/elements.module';

// Component
import { HomeComponent } from './components/home.component';
import { VideoComponent } from './components/video.component';
import { PlaylistsComponent } from './components/playlists.component';
import { PlaylistComponent } from './components/playlist.component';
import { VideosComponent } from './components/videos.component';

@NgModule({
  declarations: [
    HomeComponent,
    VideoComponent,
    PlaylistsComponent,
    PlaylistComponent,
    VideosComponent
  ],
  imports: [
    CommonModule,

    // Custom Module
    ElementsModule,

    // Routing
    ZVideoRoutingModule
  ],
  exports: [
  ]
})
export class ZVideoModule { }
