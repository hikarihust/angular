import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// Component
import { PipeComponent } from './pipe/pipe.component';
import { CusPipeComponent } from './cus-pipe/cus-pipe.component';

// Pipe
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ArrayPipe } from './pipes/array.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { CategoryPipe } from './pipes/category.pipe';

// Project
import { ProjectComponent } from './project-list/components/project.component';
import { ControlComponent } from './project-list/components/control.component';
import { CourseComponent } from './project-list/components/course.componet';
import { CourseCapitalizePipe } from './project-list/pipes/course-capitalize.pipe';
import { CourseSummaryPipe } from './project-list/pipes/course-summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // Component
    PipeComponent,
    CusPipeComponent,

    // Pipe
    CapitalizePipe,
    ArrayPipe,
    SortPipe,
    SummaryPipe,
    CategoryPipe,

    // Project
    ProjectComponent,
    ControlComponent,
    CourseComponent,
    CourseCapitalizePipe,
    CourseSummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
