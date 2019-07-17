import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
myForm:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.createForm()
  }
createForm(){
  this.myForm = this.fb.group({
    phone:['',Validators.required],
    phones:this.fb.array([])
  })
}  
get phoneForms(){
  return this.myForm.get('phones') as FormArray
}
addPhone(){
  const phone = this.fb.group({
    altPhone:[]
  })
  this.phoneForms.push(phone);
}
deletePhone(i){
  this.phoneForms.removeAt(i);
}
}
