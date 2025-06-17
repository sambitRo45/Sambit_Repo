import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'student-staff';
  
  showStudents = false;
  showStaffs = false;
  selectedMessage = '';

  constructor(private router: Router) {}

  students = Array.from({ length: 10 }, (_, i) => `Student ${i + 1}`);
  staffs = Array.from({ length: 5 }, (_, i) => `Staff ${i + 1}`);

  onClickStudent() {
    this.showStudents = true;
    this.showStaffs = false;
    this.selectedMessage = '';
  }

  onClickStaff() {
    this.showStaffs = true;
    this.showStudents = false;
    this.selectedMessage = '';
  }

  onSelectPerson(person: string) {
    if (person.startsWith('Student')) {
      this.selectedMessage = `${person} is reading`;
    } else if (person.startsWith('Staff')) {
      this.selectedMessage = `${person} do his work`;
    }
  }

  routingValidation(data:number)
  {
    if (data <30)
    {
      alert('less than 30');
      // this.router.navigate(['/bus']);
    }
    else{
      alert('greater than 33');
      this.router.navigate(['/bus']);
    }
  }
}
