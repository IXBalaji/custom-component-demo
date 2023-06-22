import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  private employees= [
    { id: 1, name: 'John Doe', position: 'Manager', salary: 50000 },
    { id: 2, name: 'Jane Smith', position: 'Developer', salary: 40000 },
    { id: 3, name: 'Bob Johnson', position: 'Designer', salary: 29000 },
    { id: 4, name: 'Teri Dactyl', position: 'Developer', salary: 40000 },
    { id: 5, name: 'Aida Bugg', position: 'Manager', salary: 38000 },
    { id: 6, name: 'Allie Grater', position: 'Designer', salary: 35000 },
    { id: 7, name: 'Ray Sin', position: 'Manager', salary: 50000 },
    { id: 8, name: 'Rhoda Report', position: 'Developer', salary: 40000 },
    { id: 9, name: 'Boby Johnson', position: 'Tester', salary: 32000 },
    { id: 10, name: 'Hope Furaletter', position: 'Developer', salary: 40000 },
    { id: 11, name: 'Bea Mine', position: 'Manager', salary: 39000 },
    { id: 12, name: 'Adi Grater', position: 'Helper', salary: 24000 }
  
  ];
  getEmployees() {
    return this.employees;
  }
}
