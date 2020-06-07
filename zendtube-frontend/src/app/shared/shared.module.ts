import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Service
import { AdsService } from './services/ads.service';
import { PlaylistService } from './services/playlist.service';
import { VideoService } from './services/video.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [
    AdsService,
    PlaylistService,
    VideoService
  ]
})
export class SharedModule { }
