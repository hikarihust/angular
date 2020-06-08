import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Service
import { AdsService } from './services/ads.service';
import { PlaylistService } from './services/playlist.service';
import { VideoService } from './services/video.service';

// Pipe
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    SafePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafePipe
  ],
  providers: [
    AdsService,
    PlaylistService,
    VideoService
  ]
})
export class SharedModule { }
