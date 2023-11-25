import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent {
  Cartoon_Name:string[]=["Tom","Jerry","Shinchan"];
  Question:string="What is your Name";

  columns:string[]=["Cartoon","School","Timing"];
  Inner_data:string[][]=[["Tom","Model","10am"],["Jerry","KV","10am"],["Shinchan","Army School","11am"]];




}
