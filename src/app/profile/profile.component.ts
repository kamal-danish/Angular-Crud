import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
myForms:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.myForms = this.fb.group({
      phones:this.fb.array([]),
    })
  }
  get PhoneForms(){
    return this.myForms.get('phones') as FormArray
  }
  addPhone(){
    const phone = this.fb.group({
      prefix:[],
      email:[],
    })
    this.PhoneForms.push(phone)
  }
  deletePhone(i){
    this.PhoneForms.removeAt(i)
  }
}
