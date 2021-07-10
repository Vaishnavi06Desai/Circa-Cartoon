import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login, regdata } from '../JSONData/signin';
import { AuthService } from '../services/auth.service';


export class MyErrorStateMatcher implements MyErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private as: AuthService, private router: Router) { }


  user: any;

  login: boolean = true;
  error: any;

  signindata: any;
  signupdata: any;

  move() {
    this.login = !this.login;
    this.error = false;
  }

  submit() {
    if (this.isdisabled()) { this.error = "Please fill all fields properly."; return }
    if (this.login) {

      this.as.login(this.formlogin.value).then(res => {
        // this.router.navigate(['/home']);
      }).catch(err => {
        this.error = err.message;
      })
    }
    else {
      this.as.signup(this.formreg.value).then(res => {
        this.login = true;

      }).catch(err => {
        this.error = err.message;
      })
    }
  }

  isdisabled() {
    if (this.login) {
      if (this.formlogin.get('email')!.invalid) {
        return true;
      }
    }

    else {
      if (this.formreg.invalid) {
        return true;
      }
    }
  }

  formlogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')]),
    password: new FormControl('', [Validators.required,])
  })

  formreg = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)]),
    confirmpassword: new FormControl('', [Validators.required]),

  })

  ngOnInit(): void {
    this.as.authstate().subscribe((user) => {
      if (user) {
        this.router.navigate(['/home']);
      }
      else {
        this.login = true;
      }
    })
    this.formreg.setValidators(this.checkPasswords);

    this.signupdata = regdata;

    this.signindata = login;
  }


  formlog(name: string) { return this.formlogin.get(name)!; }
  formregget(name: string) { return this.formreg.get(name)!; }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.controls.password.value;
    let confirmPass = group.controls.confirmpassword.value;

    return pass === confirmPass ? null : { notSame: true }
  }

}
