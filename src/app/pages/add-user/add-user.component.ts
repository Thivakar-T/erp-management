
import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
import {ViewEncapsulation } from '@angular/core'; 

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
  
constructor(private fb: FormBuilder,
  private route: Router,
  private router: ActivatedRoute){}
  
  ngOnInit(): void {
    this.studentForm = this.fb.group({
      class: ['', Validators.required],
      section: ['', Validators.required],

    }) 
  }
  
  get f(): { [key: string]: AbstractControl } {
    return this.studentForm.controls;
  }
  onSubmit() {
    this.Submitted = true;
  }

  }

