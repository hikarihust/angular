import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Component
import { YoutubeComponent } from './project/components/youtube.component';

// Hello Service
import { LogService } from './services/log.service';

// Caculator Service
import { CaculatorComponent } from './caculator-service/caculator.component';

// Course Service
import { CourseComponent } from './course-service/course.component';

@NgModule({
  declarations: [
    AppComponent,
    CaculatorComponent,
    CourseComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
