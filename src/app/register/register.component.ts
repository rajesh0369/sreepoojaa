import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitClick: boolean = false;
  name='';
  email='';
  password='';
  rePassword='';
  isSuccessful:boolean=false;
  isNotSuccessful:boolean=false;
  successMessage='';
  passwordsMatching: boolean = false;
  ngOnInit() { };
  // @ViewChild('password') password1: ElementRef;
  // @ViewChild('rePassword') rePassword1: ElementRef;

  constructor(private http:HttpClient,private router:Router) {
  }

  ngAfterViewInit() {
    // console.log(this.password1.nativeElement);
    // console.log(this.rePassword1.nativeElement);
  }
  submitRegister(formdata: NgForm) {
    // console.log(formdata.value);
    this.name = formdata.value.name;
    this.email = formdata.value.email;
    this.password = formdata.value.password;
    this.rePassword = formdata.value.rePassword;

    if (formdata.valid) {
      if (this.password == this.rePassword) {
        this.passwordsMatching = false;

        const url='http://localhost/sreepoojaa/controllors/users.php';
        let data={
          crud:'insertUser',
          name:this.name,
          email:this.email,
          password:this.password
        }
        this.http.post(url,data).subscribe(
          (res)=>{
            if(res){
              this.isSuccessful=true;
              this.successMessage='Registered Successfully,Please Login with your credentials';
              setTimeout(() => {
                this.router.navigate(['/', 'login']);
              }, 5000);
            }
            else{
              this.isNotSuccessful=true;
              this.successMessage='Not Registered Successfully';
            }
          },
          (err)=>{
            this.isNotSuccessful=true;
            this.successMessage='Error Occured';
          }
        )
      }
      else{
        this.passwordsMatching = true;
      }
    }
    else {
      this.submitClick = true;
    }

  }

}
