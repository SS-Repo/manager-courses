import { CourseService } from './../list-course.service';
import { ListCourse } from './../list-course';
import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  _filterBy!: string;

  filteredCourses: ListCourse[] = [];

  _courses: ListCourse [] = [];


  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void{
    this.courseService.retrieveAll().subscribe({
      next: courses =>{
        this._courses = courses;
        this.filteredCourses = this._courses;
      },
      error: err =>console.log('Error', err)
    });
  }

  deleteById(courseId: number): void{
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        console.log('Deleted with success');
      },
      error: err => console.log('Error', err)
    });
  }

  set filter(value: string){
    this._filterBy = value;

    this.filteredCourses = this._courses.filter(
      (course: ListCourse) => course.name.toLocaleLowerCase()
      .indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterBy;
  }

}
