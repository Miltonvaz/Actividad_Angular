import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AccordionComponent } from '../accordion/accordion.component';
import { Students } from '../../models/students';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    AccordionComponent
  ]
})
export class DashboardComponent {
  studentArray: Students[] = [];

  constructor() {
    this.studentArray = AccordionComponent.students;
  }

  get students() {
    return this.studentArray;
  }

  deleteStudent(id: number) {
    this.studentArray = this.studentArray.filter(student => student.id !== id);
  }
  
}
