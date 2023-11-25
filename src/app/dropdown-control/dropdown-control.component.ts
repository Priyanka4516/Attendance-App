import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-control',
  templateUrl: './dropdown-control.component.html',
  styleUrls: ['./dropdown-control.component.scss']
})
export class DropdownControlComponent {
  @Input() options:string[]=[
    "Priyanka","Naman","Shinchan"
  ]
  @Input() labelName:string="Choose a Dog name";

  //Define  output property
  @Output() selectedPersonEmitter:EventEmitter<String> =new EventEmitter<String>(); 
  

  selectedPerson:string="";
  sample(value:any){
    this.selectedPerson=value;
    this.selectedPersonEmitter.emit(this.selectedPerson);
  }

}
