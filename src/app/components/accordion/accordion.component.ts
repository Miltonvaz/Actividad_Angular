import {  Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Students } from '../../models/students';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'expansion-steps',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  standalone: true,
  imports: [
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
})
export class AccordionComponent {
  static students: Students[] = []; 
  currentId: number = 0;

  form: FormGroup;
  currentStep = 0;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      age: [''],
      asignatures: ['']
    });
  }

  step(): number {
    return this.currentStep;
  }

  setStep(step: number): void {
    this.currentStep = step;
  }

  submitForm(): void {
    const student: Students = {
      id: ++this.currentId,
      name: this.form.value.firstName,
      lastName: this.form.value.lastName,
      age: this.form.value.age,
      asignatures: [this.form.value.asignatures]
    };
    AccordionComponent.students.push(student);
    console.log('Student added:', student);

    this.form.reset();
  }
}
