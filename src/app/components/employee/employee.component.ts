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
  // Create new employee
  addEmployee(employee: Employee) {
    this.isLoading = true;
    this.error = null;

    this.employeeService.addEmployee(employee).subscribe(
      (newEmployee: Employee) => {
        this.employees.push(newEmployee);
        this.isLoading = false;
      },
      (err) => {
        this.error = 'Failed to add employee. Please try again later.';
        this.isLoading = false;
      }
    );
  }

  // Update existing employee
  updateEmployee(employee: Employee) {
    this.isLoading = true;
    this.error = null;

    this.employeeService.updateEmployee(employee).subscribe(
      (updatedEmployee: Employee) => {
        const index = this.employees.findIndex(emp => emp.id === updatedEmployee.id);
        if (index !== -1) {
          this.employees[index] = updatedEmployee;
        }
        this.isLoading = false;
      },
      (err) => {
        this.error = 'Failed to update employee. Please try again later.';
        this.isLoading = false;
      }
    );
  }

  // Delete an employee
  deleteEmployee(employeeId: number) {
    this.isLoading = true;
    this.error = null;

    this.employeeService.deleteEmployee(employeeId).subscribe(
      (success: boolean) => {
        if (success) {
          this.employees = this.employees.filter(emp => emp.id !== employeeId);
        }
        this.isLoading = false;
      },
      (err) => {
        this.error = 'Failed to delete employee. Please try again later.';
        this.isLoading = false;
      }
    );
  }
}
