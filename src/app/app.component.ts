import { Component } from '@angular/core';
import { Employee } from './office/employee.model';
import { Office } from './office/office.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  newOfficeName: string = '';
  newOfficeTel: string = '';
  newOfficeEmail: string = '';
  newOfficeAddress: string = '';
  newOfficeCap: string = '';
  newOfficeColor: string = '';
  offices: Office[] = [
    new Office(
      '1',
      'First Office',
      [new Employee('1', 'Tiaan', 'vdm')],
      '0823649864',
      'info@specno.com',
      25,
      '10 Willie Van School',
      '#489dda'
    ),
  ];

  newOfficeID: number = this.offices.length + 1;
  title = 'Assessment For Spenco';

  addOffice(): void {
    this.offices.push(
      new Office(
        this.newOfficeID.toString(),
        this.newOfficeName,
        [new Employee('test', 'test', 'test')],
        this.newOfficeTel,
        this.newOfficeEmail,
        0,
        this.newOfficeAddress,
        this.newOfficeColor
      )
    );
  }
  updateOfficeColor(event: any): void {
    this.newOfficeColor = (<HTMLInputElement>event.target).value;
    console.log(this.newOfficeColor);
  }
  updateOfficeName(event: any): void {
    this.newOfficeName = (<HTMLInputElement>event.target).value;
  }
  updateOfficeTel(event: any): void {
    this.newOfficeTel = (<HTMLInputElement>event.target).value;
  }
  updateOfficeEmail(event: any): void {
    this.newOfficeEmail = (<HTMLInputElement>event.target).value;
  }
  updateOfficeAddress(event: any): void {
    this.newOfficeAddress = (<HTMLInputElement>event.target).value;
  }
  updateOffceCap(event: any): void {
    this.newOfficeCap = (<HTMLInputElement>event.target).value;
  }

  constructor() {}
}
