import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-condition',
  templateUrl: './form-condition.component.html',
  styleUrls: ['./form-condition.component.css']
})
export class FormConditionComponent implements OnInit {

  // @Input() set disableControl( condition : boolean ) {
  //   const action = condition ? 'disable' : 'enable';
  //   this.ngControl.control[action]();
  // }

  
  public communities: any = [
    { id: 0, name: "Muslim" },
    { id: 1, name: "Hindu" },
    { id: 2, name: "Sikh" },
    { id: 3, name: "Budh" },
    { id: 4, name: "Zoroas(Parsis)" },
    { id:5, name:"NA"}
];


  formCondition: FormGroup
  formVal: boolean = true;
  submitted: boolean=false;
  button: boolean;
  addButtonDisable: boolean;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    this.formCondition.disable();
    this.formCondition.value.optionVal=0;
    this.button=true;
  }
  createForm() {
    this.formCondition = this.fb.group({
      optionVal: ['', Validators.required],
      categoryName: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
      mobileNumber:['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      telephoneNumber:this.fb.array([]),
    })
  }
  get f(){
  return this.formCondition.controls;
  }

  get contactNumber(){
    return this.formCondition.get('telephoneNumber') as FormArray
  }


  addPhoneNumber(){
    const phoneNumber = this.fb.group({
      altPhone:['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]]
    });
    this.contactNumber.push(phoneNumber);
    if(this.contactNumber.length == 3){
      this.addButtonDisable=true;
    }else{
      this.addButtonDisable=false;
    }
    
  }

  deletePhone(i){
    this.contactNumber.removeAt(i);
    if(this.contactNumber.length < 3){
      this.addButtonDisable=false
    }
  }

  onChange(event) {
    let val = event.target.value;
    if (val != 'NA') {
      // this.formCondition.get('state').reset();
      this.formCondition.controls['categoryName'].disable()
    }
    else {
      this.formCondition.controls['categoryName'].enable();
    }

  }
  formCheck(event) {
    if (event.target.checked) {
      this.formCondition.controls['optionVal'].enable();
      this.formCondition.controls['mobileNumber'].enable();
      this.formVal = false;
      this.button=false
    }else {
      this.formCondition.controls['optionVal'].disable();
      this.formCondition.controls['categoryName'].disable()
      this.formCondition.get('optionVal').reset();
      this.formCondition.get('categoryName').reset();
      this.formCondition.controls['mobileNumber'].reset();
      this.formCondition.controls['mobileNumber'].disable();
      this.formVal=true;
      this.button=true;
    }
  }
  onSubmit(){
    this.submitted=true;
    if(this.formCondition.invalid){
      return;
    }
    alert('success')
  }
  get mobileNumber(){
    return this.formCondition.get('mobileNumber');
 }   
 get categoryName(){
   return this.formCondition.get('categoryName')
 }
}
