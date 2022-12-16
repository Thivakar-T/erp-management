import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, Route } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  LoginForm!: FormGroup;
  public Submitted = false;
  obj: any = {};


  constructor(private fb: FormBuilder,
    private route: Router,
    private router: ActivatedRoute,
    ){}
    ngOnInit(): void {
      this.LoginForm = this.fb.group({
       
       
        userName: ['', Validators.required],
        password: ['', Validators.required],
})
}
get f(): { [key: string]: AbstractControl } {
  return this.LoginForm.controls;
}
onSubmit() {
  this.Submitted = true;
  if(this.LoginForm.invalid){
    return
  }
  console.log(this.LoginForm.value)
}

}
