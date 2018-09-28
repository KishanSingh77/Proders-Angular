import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';
import { Credentials } from 'src/app/Models/Credentials';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: Credentials;
  credentialsForm: FormGroup;
  token: String;
  authMsg: String;;
  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
    this.createFormGroup();
  }


  createFormGroup() {
    this.credentialsForm = new FormGroup({
      'username': new FormControl(''),
      'password': new FormControl(''),

    });

  }

  onSubmit() {
    console.log('in submit');

    let credentials = this.credentialsForm.value;
    console.log(credentials)
    console.log('Fetching data');

    this.loginService.validateLogin(credentials)
      .subscribe(data => {
        this.token = data.token;
        localStorage.setItem('authToken', this.token.toString());

        console.log(
          localStorage.getItem('authToken'));
        this.authMsg = data.message;
        console.log(this.authMsg);
        this.navigateToDashBoard();
      });
  }


  navigateToDashBoard() {
    if (this.authMsg == 'Auth successful') {

      this.router.navigate(['/userDashboard']);

    }
  }
}