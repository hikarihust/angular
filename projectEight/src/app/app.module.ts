import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; // CLI imports AppRoutingModule
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

// Exe One
import { HomeComponent } from './exe-one/home.component';
import { AboutComponent } from './exe-one/about.component';
import { ContactComponent } from './exe-one/contact.component';
import { NotFoundComponent } from './exe-one/not-found.component';

import { CourseModule } from './exe-two/course.module';

// // Exe Two
// import { CourseListComponent } from './exe-two/components/course-list.component';
// import { CourseService } from './exe-two/services/course.service';
// import { CourseDetailComponent } from './exe-two/components/course-detail.component';
// import { CourseDetailGuard } from './exe-two/course-detail-guard.service';

@NgModule({
  declarations: [
    AppComponent,

    // Exe One
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,

    // Exe Two
    // CourseListComponent,
    // CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    CourseModule,
    AppRoutingModule
  ],
  // providers: [CourseService, CourseDetailGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
