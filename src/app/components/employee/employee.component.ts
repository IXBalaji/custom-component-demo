import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  employees!: any[];
constructor(private employeeService: EmployeeService) { }
  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }
}
