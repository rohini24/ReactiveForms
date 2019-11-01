import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  createForm(){
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName:[''],
      email: [''],
      phone: ['']
    })
  }
  submit(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
    }
  }
}
