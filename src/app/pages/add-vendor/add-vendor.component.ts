import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent {
  formpage!: FormGroup;
  public submitted = false;
  ReadMore: boolean = true
  visible: boolean = false

  classes: any
  sections: any
  months: any
  years: any
  status:any

  constructor(private fb: FormBuilder) {
    this.formpage = this.fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      email: ['', Validators.required],
      mobileNo: ['', Validators.required],
      addressLine1:['', Validators.required],
      addressLine2:['', Validators.required],
      countryId:['', Validators.required],
      stateId:['', Validators.required],
      cityId:['', Validators.required],
      gstIN:['', Validators.required],
      alternativeMobileNo:['', Validators.required],
      note:['', Validators.required],
    });

  }

  ngOnInit(): void {
   this.status=[
    "Active","InActive"
   ]


  }
  get f() {
    return this.formpage.controls;
  }

  onsubmit() {
   
      console.log(this.formpage.value);

      this.ReadMore = !this.ReadMore;
      this.visible = !this.visible
    
  }

}

