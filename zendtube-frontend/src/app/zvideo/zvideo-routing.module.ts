import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { HomeComponent } from './components/home.component';
import { VideoComponent } from './components/video.component';
import { PlaylistsComponent } from './components/playlists.component';
import { PlaylistComponent } from './components/playlist.component';
import { VideosComponent } from './components/videos.component';


const defineRoutes: Routes = [
  // Home Page /
  {path: '', component: HomeComponent},

  // List videos /videos?page=1
  {path: 'videos', component: VideosComponent},

  // List Playlists /playlists?page=1
  {path: 'playlists', component: PlaylistsComponent},

  // List videos in Playlist /playlists?page=1
  {
    path: 'playlist',
    children: [
      {
        path: '',
        component: PlaylistsComponent
      },
      {
        path: ':id',
        component: PlaylistComponent
      }
    ]
  },

  // Info video /video/:id
  {
    path: 'video',
    children: [
      {
        path: '',
        component: VideosComponent
      },
      {
        path: ':id',
        component: VideoComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(defineRoutes)],
  exports: [RouterModule]
})
export class ZVideoRoutingModule { }
