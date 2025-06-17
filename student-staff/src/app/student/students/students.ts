import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students {
  students = [
    'Student 1', 'Student 2', 'Student 3', 'Student 4', 'Student 5',
    'Student 6', 'Student 7', 'Student 8', 'Student 9', 'Student 10'
  ];
}
