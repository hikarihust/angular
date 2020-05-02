import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Exe One
import { HomeComponent } from './exe-one/home.component';
import { AboutComponent } from './exe-one/about.component';
import { ContactComponent } from './exe-one/contact.component';
import { NotFoundComponent } from './exe-one/not-found.component';

// Exe Two
import { CourseListComponent } from './exe-two/components/course-list.component';
import { CourseDetailComponent } from './exe-two/components/course-detail.component';
import { CourseDetailGuard } from './exe-two/services/course-detail-guard.service';

const routes: Routes = [
  // Exe One
  // { path: ''          , component: HomeComponent },
  // { path: 'about'     , component: AboutComponent },
  // { path: 'about/web'     , component: AboutComponent },
  // { path: 'contact'   , component: ContactComponent },
  // { path: '**'		    , component: NotFoundComponent },

  // Exe two
  { path: 'course/:id', component: CourseDetailComponent, canActivate: [CourseDetailGuard] },
  { path: 'courses'   , component: CourseListComponent },
  { path: ''          , redirectTo: '/courses', pathMatch: 'full' },
  { path: '**'		    , component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
