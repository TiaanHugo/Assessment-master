import { Office } from './office.model';
import { Component, Input, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss'],
})
export class OfficeComponent implements OnInit {
  @Input('officeElement') element: {
    ID: string;
    Name: string;
    Staff: Employee[];
    Tel: string;
    Email: string;
    Capacity: number;
    Address: string;
  };

  constructor() {}

  ngOnInit(): void {}
}
