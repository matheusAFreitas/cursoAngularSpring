import { Component, OnInit } from '@angular/core';
import { ICourse } from '../model/ICourse';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  coursesData: ICourse[] = [
    {
      _id: '1',
      name: 'Angular',
      category: 'front-end',
    },
  ];
  displayedColumns: string[] = ['name', 'category'];

  constructor() {}

  ngOnInit(): void {}
}
