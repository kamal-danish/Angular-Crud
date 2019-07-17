import { Component, OnInit,EventEmitter } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import{Router} from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup
  onAdd = new EventEmitter();
submitted=false;
  email: any;
  constructor(private fb:FormBuilder,private router:Router,public shared:SharedService) { }

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
 this.email = this.myForm.value.email
 localStorage.setItem('currentUser',this.email)
// this.onAdd.emit(this.email);
this.router.navigate(['user'],{ queryParams: { id: this.email } });

    
  }
}
