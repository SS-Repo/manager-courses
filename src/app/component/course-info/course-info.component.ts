import { CourseService } from './../list-course.service';
import { ListCourse } from './../list-course';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  course = Object.create(ListCourse);
  id!: string;

  constructor(private activatedRoute: ActivatedRoute, private CourseService: CourseService) { }

  ngOnInit(): void {
    this.CourseService.retrieveById(this.activatedRoute.snapshot.params['id']).subscribe({
       next: course => this.course = course,
      error: err =>console.log('Error',err)
    });
  }

  save(): void{
    this.CourseService.save(this.course).subscribe({
      next: course => console.log('Saver with success', course),
      error: err => console.log('Error', err)
    });
  }
}
