import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Students } from './students/students';
import { Staffs } from './staffs/staffs';
import { ReactiveFormsModule } from '@angular/forms';
import { Student1 } from './students/student-1/student-1';



@NgModule({
  declarations: [
    Students,
    Staffs,
    Student1
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
