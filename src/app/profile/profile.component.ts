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
      phone:this.fb.array([])
    })
   
  }
  get phoneForms(){
    return this.myForms.get('phone') as FormArray
      
    }
    addPhone(){
      const phones=this.fb.group({
prefix:[]
      })
      this.phoneForms.push(phones)
    }
    detete(i){
      this.phoneForms.removeAt(i)
    }
}
