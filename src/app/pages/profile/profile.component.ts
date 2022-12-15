import { Component,OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
import {ViewEncapsulation } from '@angular/core'; 
import { ToastrService } from 'ngx-toastr';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogueboxComponent } from './../dialoguebox/dialoguebox.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent  implements OnInit {
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
gender = [
  {id: 1, name: 'Male'},
  {id: 2, name: 'Female'}
];
status = [
  {id: 1, name: 'Active'},
  {id: 2, name: 'Inactive'}
];
role = [
  {id:1, name: 'user'},
  {id:2, name: 'admin'},
]
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private router: ActivatedRoute,
    private toastr: ToastrService,
    public dialog: MatDialog
  ){}
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogueboxComponent, {
      width: '400px',
      height:'200px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

    ngOnInit(): void {
      this.studentForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        PhoneNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],  
        GenderId: ['', Validators.required],
        CountryId: ['', Validators.required],
        StateId: ['', Validators.required],
        CityId: ['', Validators.required],
        RoleId: ['', Validators.required],
        Status: ['', Validators.required],
        AddressLine1: ['', Validators.required],
        AddressLine2: ['', Validators.required],  
       
      }) 
    }
    
    get f(): { [key: string]: AbstractControl } {
      return this.studentForm.controls;
    }
    onSubmit() {
      this.Submitted = true;
      if(this.studentForm.value){
        console.log(this.studentForm.value)
        localStorage.setItem("value",JSON.stringify(this.studentForm.value))
        }
      }
    }
  