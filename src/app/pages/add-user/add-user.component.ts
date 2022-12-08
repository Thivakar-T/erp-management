
import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
import {ViewEncapsulation } from '@angular/core'; 
var filename: any
interface Stand {
  value: string;
  viewValue: string;
}
interface Sec {
  value: string;
  viewValue: string;
}
interface Gender {
  value: string;
  viewValue: string;
}
interface bloodGroup {
  value: string;
  viewValue: string;
}
interface religions {
  value: string;
  viewValue: string;
}
interface cate {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export  class  AddUserComponent  implements OnInit{
  studentForm!: FormGroup;
  public Submitted = false;
  obj: any = {};
  selectedCar!: number;
  country= [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];
cities = [
  {id: 1, name: 'Vilnius'},
  {id: 2, name: 'Kaunas'},
  {id: 3, name: 'Pavilnys', disabled: true},
  {id: 4, name: 'Pabradė'},
  {id: 5, name: 'Klaipėda'}
];
state = [
  {id: 1, name: 'Vilnius'},
  {id: 2, name: 'Kaunas'},
  {id: 3, name: 'Pavilnys', disabled: true},
  {id: 4, name: 'Pabradė'},
  {id: 5, name: 'Klaipėda'}
];
role = [
  {id: 1, name: 'Admin'},
  {id: 2, name: 'User'},
  {id: 3, name: 'Vendor', disabled: true},
 
];
Status = [
  {id: 1, name: 'Active'},
  {id: 2, name: 'Inactive'},
 
];


constructor(private fb: FormBuilder,
  private route: Router,
  private router: ActivatedRoute){}
  
  ngOnInit(): void {
    this.studentForm = this.fb.group({
     
     
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      PhoneNo: ['', Validators.required],
      CountryId: ['', Validators.required],
      StateId: ['', Validators.required],
      CityId: ['', Validators.required],
      RoleId: ['', Validators.required],
      Status: ['', Validators.required],
      AddressLine1: ['', Validators.required],
      AddressLine2: ['', Validators.required],
      Note: ['', Validators.required],
     
      
     
    }) 
  }
  
  get f(): { [key: string]: AbstractControl } {
    return this.studentForm.controls;
  }
  onSubmit() {
    this.Submitted = true;
  }

  }

