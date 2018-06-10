import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {

  isUserValid: boolean = false;
  recId;
  userDetails;
  constructor(private userService: UserServiceService, private http: HttpClient, private router: Router) { 
    
  }

  ngOnInit() {
    this.userService.validUser.subscribe(
      (flag) => {
        this.isUserValid = flag;
      }
    )
    this.userService.userDet.subscribe(
      (recId) => {
        this.recId = recId;
        const url = 'http://localhost/sreepoojaa/controllors/users.php';
        let data = {
          crud: 'fetchUserDetails',
          recId: recId,
        }
        this.http.post(url, data).subscribe(
          (res:any) => {
            if (res) {
              this.userDetails=res;
              // this.router.navigate(['/home']);
              
            }
            else {
            }
          },
          (err) => {
          }
        );
      }
    );
  }

  logout() {
    this.userService.isUserValid(false);
    this.userService.setUserDetails('');
  }

}
