import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  isUserValid:boolean=false;
  constructor(private userService:UserServiceService) { }

  ngOnInit() {
    this.userService.validUser.subscribe(
      (flag)=>{
        this.isUserValid=flag;
      }
    )
  }
  logout() {
    this.userService.isUserValid(false);
    this.userService.setUserDetails('');
  }
}
