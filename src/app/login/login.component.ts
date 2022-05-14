import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;
  constructor(private http: HttpClient,private router:Router) {
    this.http = http;
  }

  ngOnInit() {
    // this.userLogin();
  }
  // userLogin() {
  //   this.loginForm = new FormGroup({
  //     username: new FormControl('',Validators.compose[Validators.required,Validators.name]),
  //     password: new FormControl('', Validators.compose[Validators.required,Validators.minLength[8],Validators.maxLength[32]]),
  //   })
  // }
  // Login() {
  //   this.loginForm.getRawValue();
  //   console.log(this.loginForm);
  //   let httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });

  //   let options = {
  //     headers: httpHeaders
  //   };
  //   this.http.post(environment.baseUrl + '/login', this.loginForm.value, options)
  //     .subscribe(
  //       (data) => {
  //         console.log(data)
  //           console.log("POST IS SUCCESSFUL", data);
  //           alert("Logged in successfully");
  //           this.router.navigate(['/leaderboard']);
  //       },
  //       (error) => {
  //         console.log('Error', error);
  //         alert("Incorrect Username/Password");
  //       }
  //     );
  // }
}