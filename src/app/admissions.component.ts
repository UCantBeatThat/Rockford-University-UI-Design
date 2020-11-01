import { Component } from '@angular/core';

@Component({
  selector: 'admissions',
  templateUrl: './admissions.component.html',
})
export class AdmissionsComponent {
  course_names = [
    {
      course_name: 'B Tech Chemical Engineering',
    },
    {
      course_name: 'B Tech Civil Engineering',
    },
    {
      course_name: 'B Tech Computer Science & Engineering',
    },
    {
      course_name: 'B Tech Computer and Communication Engineering',
    },
    {
      course_name: 'B Tech Data Science & Engineering',
    },
    {
      course_name: 'B Tech Electrical & Electronics Engineering',
    },
    {
      course_name: 'B Tech Electronics & Communication Engineering',
    },
    {
      course_name: 'B Tech Information Technology',
    },
  ];

  onFormSubmit(inputName){
      localStorage.setItem('student_name', inputName);
      location.reload();
  }
}
