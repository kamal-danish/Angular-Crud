import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
myForm:FormGroup
submitted=false;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  createForm(){
    this.myForm = this.fb.group({
      email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:['',[Validators.required,Validators.minLength(8)]],
    })
  }
  get f(){
    return this.myForm.controls
  }
  onSubmit(){
    this.submitted = true;
    if(this.myForm.invalid){
      return;
    }
  }
}
