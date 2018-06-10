import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../../user-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  userDetails;
  recId;
  oldPassword;
  newPassword;
  confirmNewPassword;
  isSuccessful: boolean = false;
  isNotSuccessful: boolean = false;
  passwordsMatching: boolean = false;
  submitClick: boolean = false;
  successMessage = '';

  constructor(private http: HttpClient,
    private userService: UserServiceService,
    private router: Router) { }

  ngOnInit() {
    this.recId = this.userService.getUserDetails();
    const url = 'http://localhost/sreepoojaa/controllors/users.php';
    let data = {
      crud: 'fetchUserDetails',
      recId: this.recId,
    }
    this.http.post(url, data).subscribe(
      (res) => {
        if (res) {
          this.userDetails = res;
        }
        else {
          this.router.navigate(['/login']);
        }
      },
      (err) => {
        this.router.navigate(['/login']);
      }
    );
  }

  changePassword(formdata: NgForm) {
    if (formdata.valid) {
      this.oldPassword = formdata.value.oldPassword;
      this.newPassword = formdata.value.newPassword;
      this.confirmNewPassword = formdata.value.confirmNewPassword;

      if (this.userDetails.password == this.oldPassword) {
        if (this.newPassword == this.confirmNewPassword) {
          this.passwordsMatching = false;

          if (this.oldPassword != this.newPassword) {
            const url = 'http://localhost/sreepoojaa/controllors/users.php';
            let data = {
              crud: 'updatePassword',
              recId: this.userDetails.recId,
              newPassword: this.newPassword
            }
            this.http.post(url, data).subscribe(
              (res) => {
                if (res) {
                  console.log(res);
                  this.isSuccessful = true;
                  this.successMessage = 'Password updated successfully,Please Login with your new password';
                  setTimeout(() => {
                    this.router.navigate(['/', 'login']);
                  }, 5000);
                }
                else {
                  this.isNotSuccessful = true;
                  this.successMessage = 'Password Not Updated';
                  setTimeout(() => {
                    this.router.navigate(['/', 'login']);
                  }, 5000);
                }
              },
              (err) => {
                this.isNotSuccessful = true;
                this.successMessage = 'Password Not Updated/Network Error';
                setTimeout(() => {
                  this.isNotSuccessful = false;
                  this.successMessage = '';
                }, 5000);
              }
            );
          }
          else {
            formdata.value.oldPassword = '';
            formdata.value.newPassword = '';
            formdata.value.confirmNewPassword = '';
            this.isNotSuccessful = true;
            this.successMessage = 'you are trying to use again older password,please try with a new password';
          }
        }
        else {
          this.passwordsMatching = true;
        }
      }
      else {

        this.isNotSuccessful = true;
        this.successMessage = 'Old Password is not correct';
        setTimeout(() => {
          this.isNotSuccessful = false;
          this.successMessage = '';
        }, 5000);
      }
    }
    else {
      this.submitClick = true;
    }

  }
}

