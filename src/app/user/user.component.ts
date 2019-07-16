import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { SharedService } from '../shared.service';
import { LoginComponent } from '../login/login.component';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  update: boolean = false;
  user: any = {}
  user2: any = {}
  userDetails = [];
  submitted = false;
  userForm: FormGroup
  modalRef: BsModalRef;
  myValue: any;
  constructor(private modalService: BsModalService, 
    private fb: FormBuilder,
    public login:LoginComponent,
    public route:ActivatedRoute) { }


  ngOnInit() {
    this.route.queryParams.subscribe((param=>{
      console.log(param)
    }))
    this.createForm();
    // this.login.onAdd.subscribe((data=>{
    //   console.log(data,'data')
    // }))
  }
  createForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      address: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.user = {};
    this.update = false;
  }
  get f() {
    return this.userForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    this.user.name = this.userForm.value.name;
    this.user.address = this.userForm.value.address;
    this.user.mobile = this.userForm.value.mobile;
    this.user.email = this.userForm.value.email;
    this.userDetails.push(this.user);
    this.user = {}
    this.modalRef.hide();
  }
  edituserDetails(template: TemplateRef<any>, k) {
    this.modalRef = this.modalService.show(template,k);
    this.user2.name = this.userDetails[k].name;
    this.user2.address = this.userDetails[k].address;
    this.user2.mobile = this.userDetails[k].mobile;
    this.user2.email = this.userDetails[k].email
    this.myValue = k;
    this.update = true;
  }

  updateUserDetails() {
    let k = this.myValue;
    for (let index = 0; index < this.userDetails.length; index++) {
      if(index == k)
      {
        this.userDetails[index]=this.user2;
        this.user2={};
      }
  }
  }
}
