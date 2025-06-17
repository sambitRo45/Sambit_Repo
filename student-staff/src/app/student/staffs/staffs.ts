import { Component } from '@angular/core';

@Component({
  selector: 'app-staffs',
  standalone: false,
  templateUrl: './staffs.html',
  styleUrl: './staffs.css'
})
export class Staffs {
  staffs = [
    'Staff 1', 'Staff 2', 'Staff 3', 'Staff 4', 'Staff 5'
  ];
}
