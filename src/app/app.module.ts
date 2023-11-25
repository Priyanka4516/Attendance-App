import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AttendanceComponent } from './attendance/attendance.component';
import { DropdownControlComponent } from './dropdown-control/dropdown-control.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AttendanceComponent,
    DropdownControlComponent,
    EmployeeTableComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
