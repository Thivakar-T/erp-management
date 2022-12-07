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
  formpage!: FormGroup;
  public Submitted = false;
  ReadMore: boolean = true
  visible: boolean = false

  classes: any
  sections: any
  months: any
  years: any
  status:any

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
cate: cate[] = [
  { value: 'Normal-0', viewValue: 'Normal' },
  { value: 'OPPOSITIONAL DEFIANT DISORDER-1', viewValue: 'Normal' },
  { value: 'ANXIETY DISORDER-2', viewValue: 'OPPOSITIONAL DEFIANT DISORDER' },
  { value: 'CONDUCT DISORDER-3', viewValue: 'ANXIETY DISORDER' },
  { value: 'OBSESSIVE COMPULSIVE  DISORDER -4', viewValue: 'OBSESSIVE COMPULSIVE  DISORDER' },
  { value: 'ATTENTION DEFICIT HYPERACTIVITY DISORDER-5', viewValue: 'ATTENTION DEFICIT HYPERACTIVITY DISORDER' },


];
  constructor(private fb: FormBuilder, private route: Router,
    private router: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.formpage = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      PhoneNo: ['', Validators.required],
      CountryId: ['', Validators.required],
      StateId: ['', Validators.required],
      CityId: ['', Validators.required],
      gstIN: ['', Validators.required],
      Status: ['', Validators.required],
      AddressLine1: ['', Validators.required],
      AddressLine2: ['', Validators.required],
      Note: ['', Validators.required],
     
    });

   this.status=[
    "Active","InActive"
   ]


  }
  get f(): { [key: string]: AbstractControl } {
    return this.formpage.controls;
  }

  onsubmit() {
   this.Submitted = true;
      console.log(this.formpage.value);

      this.ReadMore = !this.ReadMore;
      this.visible = !this.visible
    
  }

}





  
 


  