import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private userService: UserServiceService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }
  submitClick: boolean = false;
  email;
  password;
  isNotSuccessful: boolean = false;
  successMessage = '';
  submitLogin(formdata: NgForm) {

    if (formdata.valid) {
      this.email = formdata.value.email;
      this.password = formdata.value.password;
      const url = 'http://localhost/sreepoojaa/controllors/users.php';
      let data = {
        crud: 'validateUser',
        email: this.email,
        password: this.password
      }
      this.http.post(url, data).subscribe(
        (res: any) => {
          if (res) {
            this.userService.isUserValid(true);
            this.userService.setUserDetails(res.recId);
            this.router.navigate(['/', 'home']);
          }
          else {
            this.isNotSuccessful = true;
            this.successMessage = 'Invalid Details';
            setTimeout(() => {
              this.isNotSuccessful = false;
              this.successMessage = '';
            }, 5000);
          }
        },
        (err) => {
          this.isNotSuccessful = true;
          this.successMessage = 'Connection Failure';
          setTimeout(() => {
            this.isNotSuccessful = false;
          this.successMessage = '';
          }, 5000);
        }
      );


    }
    else {
      this.submitClick = true;
    }

  }

}
