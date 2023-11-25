import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent {
  @Input() headings:string[]=["ID","Name","CompanyName"];

  @Input() data:string[][]=[["100",'Naman',"Securiton"],['101','Priyanka','Securiton'],['102','Ankita','Reliance']];


}
