import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Exe Two
// Component
import { CourseListComponent } from './components/course-list.component';
import { CourseComponent } from './components/course.component';
import { CourseDetailGuard } from './services/course-detail-guard.service';
import { CourseRoutingModule } from './course-routing.module';
import { SharedModule } from '../shared/shared.module';

// Service
import { CourseService } from './services/course.service';
import { CourseDetailDeactivateService } from './services/course-detail-deactivate.service';

@NgModule({
  imports: [
    CourseRoutingModule,
    SharedModule
  ],
  declarations: [
    CourseListComponent,
    CourseComponent
  ],
  providers: [CourseService, CourseDetailGuard, CourseDetailDeactivateService ]
})
export class CourseModule { }
