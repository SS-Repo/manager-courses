import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListCourseComponent } from './component/list-course/list-course.component';
import { StarComponent } from './component/star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ErrorMsgComponent } from './component/error-msg/error-msg.component';
import { CourseInfoComponent } from './component/course-info/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCourseComponent,
    StarComponent,
    ReplacePipe,
    NavbarComponent,
    ErrorMsgComponent,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses', component: ListCourseComponent
      },
      {
        path: 'courses/info/:id', component: CourseInfoComponent
      },
      {
        path: '**', component: ErrorMsgComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
