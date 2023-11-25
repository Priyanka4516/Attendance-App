import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { DropdownControlComponent } from './dropdown-control/dropdown-control.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'attendance', component:AttendanceComponent },
  { path: 'dropdown', component:DropdownControlComponent },
  { path: 'table', component:EmployeeTableComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
