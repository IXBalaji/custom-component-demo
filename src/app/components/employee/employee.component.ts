import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  employees!: any[];
  locale: string='en-US'
constructor(private employeeService: EmployeeService) {
  debugger
  const userLanguage = navigator.language; // Get the user's language from the browser
    if (userLanguage.startsWith('fr')) {
      this.locale = 'fr-FR'; // Set the locale to French
    } else if (userLanguage.startsWith('de')) {
      this.locale = 'de-DE'; // Set the locale to German
    }
 }
  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }
}
