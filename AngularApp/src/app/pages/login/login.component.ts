import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { PopupComponent } from './popup/popup.component';
import { AuthService } from '../../services/auth.service';
import { json } from 'd3';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean;
  userForm: FormGroup;
  IsforgotPassword:boolean=false;
  unique_device_id : number;

  formErrors = {
    'email': '',
    'password': '',
    'login_error' : ''
  };
  validationMessages = {
    'email': {
      'required': 'Please enter your email',
      'email': 'Please enter your vaild email'
    },
    'password': {
      'required': 'Please enter your password',
      'pattern': 'The password must contain numbers and letters',
      'minlength': 'Please enter more than 4 characters',
      'maxlength': 'Please enter less than 25 characters',
    }
  };

  constructor(private router: Router, 
              private authService: AuthService,
              private fb: FormBuilder,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.unique_device_id = 3;
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.fb.group({
      'user_name': ['', [
        Validators.required,
        Validators.email,
        Validators.maxLength(75)
      ]
      ],
      'user_password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)
      ]
      ],
      'user_device_id': [this.unique_device_id],
    });

    this.userForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    // if (!this.userForm) {
    //   return;
    // }
    // const form = this.userForm;
    // for (const field in this.formErrors) {
    //   if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
    //     this.formErrors[field] = '';
    //     const control = form.get(field);
    //     if (control && control.dirty && !control.valid) {
    //       const messages = this.validationMessages[field];
    //       for (const key in control.errors) {
    //         if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
    //           this.formErrors[field] += messages[key] + ' ';
    //         }
    //       }
    //     }
    //   }
    // }
  }
  signIn(credentials) {

    this.authService.login(credentials)
    .subscribe(result => {
    if (result)
    {
      let resultset = result.json();
      if(resultset["error_code"] == "0")
      {
        this.invalidLogin = true;
        this.formErrors.login_error = "Wrong Credentials!";
      }
      else
      {
        this.invalidLogin = false;
        this.formErrors.login_error = "";
        if(resultset["result"]["u_status"] != '0')
        {
          localStorage.setItem('u_session_token', resultset["result"]["u_session_token"]);
          localStorage.setItem('u_name', resultset["result"]["u_name"]);
          localStorage.setItem('u_status', resultset["result"]["u_status"]);
          localStorage.setItem('u_emplyee_id', resultset["result"]["u_emplyee_id"]);
          localStorage.setItem('u_role', resultset["result"]["u_role"]);
          localStorage.setItem('u_tek_email', resultset["result"]["u_tek_email"]);
          localStorage.setItem('u_access', JSON.stringify(resultset["result"]["u_access"]));
          localStorage.setItem('u_device_id', JSON.stringify(this.unique_device_id));
          localStorage.setItem('user_info', result.text());
          this.authService.isLogged = true;
          this.router.navigate(['/']);
        }
        else
        {
          this.invalidLogin = true;
          this.formErrors.login_error = "Your Account Has Been Locked. Pleae Contact Admin.";
        }
      }
    }
    else
    {
      this.invalidLogin = true;
      this.formErrors.login_error = "Couldn't Connect To The Servers.";
    }
    });
  }
  forgotpassword(){
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      
    });
  }
}

