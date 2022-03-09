import { Employee } from './employee.model';

export class Office {
  constructor(
    public ID: string,
    public Name: string,
    public Staff: Employee[],
    public Tel: string,
    public Email: string,
    public Capacity: number,
    public Address: string
  ) {}
}
