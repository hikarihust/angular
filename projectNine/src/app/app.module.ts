import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StudyHttpModule } from './study-http/study-http.module';
import { GithubModule } from './github/github.module';
import { SpotifyModule } from './spotify/spotify.module';
import { CourseFormModule } from './course-form/course-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StudyHttpModule,
    GithubModule,
    SpotifyModule,
    CourseFormModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
