import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
 employees: Employee[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.isLoading = true;
    this.error = null;

    this.employeeService.getEmployees().subscribe(
      (data: Employee[]) => {
        this.employees = data;
        this.isLoading = false;
      },
      (err) => {
        this.error = 'Failed to load employees. Please try again later.';
        this.isLoading = false;
      }
    );
  }
}
