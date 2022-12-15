
import { Component, getNgModuleById, Input, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
import {ViewEncapsulation } from '@angular/core'; 
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { first } from 'rxjs';
import { formatCurrency } from '@angular/common';
import { hasClassName } from '@ng-bootstrap/ng-bootstrap/util/util';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogueBoxComponent } from '../dialogue-box/dialogue-box.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  
})
export  class  AddUserComponent  implements OnInit{
  userForm!: FormGroup;
  public Submitted = false;
  obj: any = {};
  selectedCar!: number;
  // keyPress(event: any) {
  //   const pattern = /[0-9\+\-\ ]/;
  //   let inputChar = String.fromCharCode(event.charCode);
  //   if (event.keyCode != 8 && !pattern.test(inputChar)) {
  //     event.preventDefault();
  //   }
  
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
  private router: ActivatedRoute,
  public dialog: MatDialog){}
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogueBoxComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  ngOnInit(): void {
    this.userForm = this.fb.group({
     
     
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      PhoneNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.maxLength(10),Validators.minLength(10)]],
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
    return this.userForm.controls;
  }
  onSubmit() {
    this.Submitted = true;
    if(this.userForm.invalid){
      return
    }
  }

  }

