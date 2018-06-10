import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {
  poojadata;
  poojaId;
  userDetails;
  userId;
  cities = ['Hyderabad', 'Secunderabad'];
  hydAreas = ['Nampally', 'Lakdikapool', 'DSNR'];
  secAreas = ['Patny', 'Paradise', 'Begumpet'];
  areas;
  languages = ['Telugu', 'Hindi', 'Tamil'];
  forWhom = ['Myself', 'To Friend'];
  isSuccessful: boolean = false;
  isNotSuccessful: boolean = false;
  submitClick: boolean = false;
  showPage: boolean = false;
  successMessage;
  name;
  email;
  bookingForDate;
  phoneNo;
  pincode;
  address1;
  address2;
  city;
  area;
  language;
  bookingFor;
  validUser;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private userService: UserServiceService) { }

  ngOnInit() {
    //fetching pooja details strats
    this.route.params.subscribe((data) => {
      this.poojaId = data.poojaId;
    });
    const url = 'http://localhost/sreepoojaa/controllors/poojas_punyakshetrams.php';
    let data1 = {
      crud: 'fetchPoojaPunyakshetram',
      tableName: 'poojas',
      id: this.poojaId
    }
    this.http.post(url, data1).subscribe((res: any) => {
      if (res) {
        this.poojadata = res[0];
        // console.log(this.poojadata);
      }
      else {
        console.log('failed');
      }
    }, err => {
      console.log('Error');

    }
    );
    //fetch pooja details ends


    //fetching user details strats
    this.userService.userDet.subscribe(
      (recId) => {
        this.userId = recId;
        const url = 'http://localhost/sreepoojaa/controllors/users.php';
        let data = {
          crud: 'fetchUserDetails',
          recId: recId,
        }
        this.http.post(url, data).subscribe(
          (res: any) => {
            if (res) {
              this.userDetails = res;
              this.name = this.userDetails.name;
              this.email = this.userDetails.email;
            }
            else {
            }
          },
          (err) => {
          }
        );
      }
    );
    //fetch user details ends
  }

  areaChange(selectedValue) {
    if (selectedValue == 'Hyderabad') {
      this.areas = [];
      for (var area = 0; area < this.hydAreas.length; area++) {
        this.areas.push(this.hydAreas[area]);
      }
    }
    else if (selectedValue == 'Secunderabad') {
      this.areas = [];
      // alert(this.secAreas.length);
      for (var area = 0; area < this.secAreas.length; area++) {
        this.areas.push(this.secAreas[area]);
      }
    }
    else {
      this.areas = [];
    }
  }

  pageChange(selectedValue4, selectedValue3, selectedValue2, selectedValue1) {
    if ((selectedValue1 && selectedValue2 && selectedValue3 && selectedValue4) == '') {
      this.city = selectedValue1;
      this.area = selectedValue2;
      this.language = selectedValue3;
      this.bookingFor = selectedValue4;
      this.showPage = false;
    }
    else {
      this.showPage = true;
    }
  }

  submitBooking(formdata: NgForm) {
    this.userService.validUser.subscribe(
      (res: any) => {
        this.validUser = res;
      }
    );
    if (this.validUser) {
      this.name = formdata.value.name;
      this.email = formdata.value.email;
      this.phoneNo = formdata.value.phoneNo;
      this.bookingForDate = formdata.value.bookingForDate;
      this.address1 = formdata.value.address1;
      this.address2 = formdata.value.address2;
      this.pincode = formdata.value.pincode;

      if (formdata.valid) {

        const url = 'http://localhost/sreepoojaa/controllors/bookings.php';
        let data = {
          crud: 'insertBooking',
          userId: this.userId,
          poojaId: this.poojaId,
          name: this.name,
          email: this.email,
          phoneNo: this.phoneNo,
          bookingForDate: this.bookingForDate,
          address1: this.address1,
          address2: this.address2,
          pincode: this.pincode,
          area: this.area,
          city: this.city,
          language: this.language
        }
        this.http.post(url, data).subscribe(
          (res) => {
            if (res) {
              this.isSuccessful = true;
              this.successMessage = 'Booking has been Successful';
              formdata.resetForm();
              setTimeout(() => {
                this.router.navigate(['/bookingConfirm/'+res]);
              }, 3000);
            }
            else {
              this.isNotSuccessful = true;
              this.successMessage = 'Booking has not been succesful';
            }
          },
          (err) => {
            this.isNotSuccessful = true;
            this.successMessage = 'Booking has not been succesfull';
            setTimeout(() => {
              this.isNotSuccessful = false;
              this.successMessage = '';
            }, 5000);
          }
        )

      }
      else {
        this.isNotSuccessful = true;
        this.successMessage = 'All fields are required';
        this.submitClick = true;
      }
    }
    else {
      alert('Please Login To Book Pooja');
      this.router.navigate(['/login']);
    }
  }

}
