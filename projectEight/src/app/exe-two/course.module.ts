import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Exe Two
import { CourseListComponent } from './components/course-list.component';
import { CourseDetailComponent } from './components/course-detail.component';
import { CourseDetailGuard } from './services/course-detail-guard.service';
import { CourseService } from './services/course.service';
import { CourseRoutingModule } from './course-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CourseRoutingModule,
    SharedModule
  ],
  declarations: [
    CourseListComponent,
    CourseDetailComponent
  ],
  providers: [CourseService, CourseDetailGuard ]
})
export class CourseModule { }
