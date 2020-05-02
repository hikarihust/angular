import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Exe Two
import { CourseListComponent } from './components/course-list.component';
import { CourseDetailComponent } from './components/course-detail.component';
import { CourseDetailGuard } from './services/course-detail-guard.service';
import { CourseService } from './services/course.service';
import { CourseRoutingModule } from './course-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CourseRoutingModule
  ],
  declarations: [
    CourseListComponent,
    CourseDetailComponent
  ],
  providers: [CourseService, CourseDetailGuard ]
})
export class CourseModule { }
