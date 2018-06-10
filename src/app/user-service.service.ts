import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  userDetails;

  validUser = new BehaviorSubject(false);
  isUserValid(flag){
    this.validUser.next(flag);
  }


  userDet = new BehaviorSubject('recId');

  setUserDetails(recId){
    this.userDet.next(recId);
    this.userDetails=recId;
  }
  getUserDetails(){
    return this.userDetails;
  }

}
