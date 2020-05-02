import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Exe Two
import { CourseListComponent } from './components/course-list.component';
import { CourseDetailComponent } from './components/course-detail.component';
import { CourseDetailGuard } from './services/course-detail-guard.service';
import { CourseService } from './services/course.service';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseDetailComponent
  ],
  providers: [CourseService, CourseDetailGuard ]
})
export class CourseModule { }
