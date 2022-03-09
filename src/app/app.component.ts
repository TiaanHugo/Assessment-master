import { Component } from '@angular/core';
import { Employee } from './office/employee.model';
import { Office } from './office/office.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  offices: Office[] = [
    new Office(
      '1',
      'qwe',
      [new Employee('1', 'Tiaan', 'vdm')],
      '0823649864',
      'info@specno.com',
      25,
      '10 Willie Van School'
    ),
  ];

  title = 'Assessment';
}
