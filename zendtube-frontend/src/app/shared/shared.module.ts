import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Service
import { AdsService } from './services/ads.service';
import { PlaylistService } from './services/playlist.service';

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
    PlaylistService
  ]
})
export class SharedModule { }
