import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators,AbstractControl } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

interface Name {
  value: string;
  viewValue: string;
}
interface Description {
  value: string;
  viewValue: string;
}
interface Status {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']

})

export class RoleComponent {
  roleForm!: FormGroup;
  public Submitted = false;
  roleobj: any = {};
  name: any
  description: any
  status:any


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.roleForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      status:['', Validators.required]

    })


  }

get f(): { [key: string]: AbstractControl } {
  return this.roleForm.controls;
}
onSubmit() {
  console.log(this.roleForm.value);
  this.Submitted = true;




}


}
