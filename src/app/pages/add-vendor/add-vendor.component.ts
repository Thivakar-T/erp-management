import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators,AbstractControl } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

interface cate {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {
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
      emailAddress: ['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      PhoneNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.maxLength(10),Validators.minLength(10)]],
      CountryId: ['', Validators.required],
      StateId: ['', Validators.required],
      CityId: ['', Validators.required],
      gstin: ['', Validators.required],
      Status: ['', Validators.required],
      AddressLine1: ['', Validators.required],
      AddressLine2: ['', Validators.required],
      note: ['', Validators.required],
     
      
     
    }) 
  }
  
  get f(): { [key: string]: AbstractControl } {
    return this.studentForm.controls;
  }
  onSubmit() {
    this.Submitted = true;
  }

  }





  
 


  