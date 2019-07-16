import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {Router} from'@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  register = {
    name: '',
    email: '',
    password: ''
  }
  submitted = false;
  constructor(private fb: FormBuilder,
    public router:Router ) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })


  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    // if(this.registerForm.valid){
      
    // }
    // this.router.navigate(['login'])
  }
  get f() {
    return this.registerForm.controls
  }
}
