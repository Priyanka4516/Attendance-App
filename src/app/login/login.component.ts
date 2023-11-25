import { Component } from '@angular/core';
import { FormGroup,FormControl,FormControlName} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm=new FormGroup({
    User: new FormControl(""),
    Password: new FormControl(""),


  })
  loginUser(){
    console.log("Done");
  }

}
