import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Students } from './student/students/students';
import { Staffs } from './student/staffs/staffs';
import { Student1 } from './student/students/student-1/student-1';
import { Bus } from './bus/bus';

const routes: Routes = [
  { path: 'students', component:Students},
  { path: 'staffs', component:Staffs},
  { path: 'student-1', component:Student1},
  { path: 'bus', component:Bus}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
