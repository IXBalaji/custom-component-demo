import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HighlightSalaryDirective } from './directives/highlight-salary.directive';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr'; // Import locale data for French
import localeDe from '@angular/common/locales/de'; // Import locale data for German

// Register the locale data
registerLocaleData(localeFr);
registerLocaleData(localeDe);
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HighlightSalaryDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-US' } // Default to English (United States)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
