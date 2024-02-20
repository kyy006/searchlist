import { Component } from '@angular/core';

export interface User {
  firstName: string;
  lastName: string;
  dept: string;
  salary: number;
  doj: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users: User[] = [
    {
      firstName: 'mary',
      lastName: 'macy',
      dept: 'Finance',
      salary: 233000,
      doj: new Date('2012-01-11'),
    },
    {
      firstName: 'Amy',
      lastName: 'qwe',
      dept: 'engine',
      salary: 8000,
      doj: new Date('2013-08-20'),
    },
    {
      firstName: 'Peter',
      lastName: 'chen',
      dept: 'IT',
      salary: 30000,
      doj: new Date('2022-11-10'),
    }
  ];

  searchTerm: string = '';
}
