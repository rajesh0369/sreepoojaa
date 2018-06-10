import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../../../user-service.service';

@Component({
  selector: 'app-poojasiteam',
  templateUrl: './poojasiteam.component.html',
  styleUrls: ['./poojasiteam.component.css']
})
export class PoojasiteamComponent implements OnInit {
  @Input() poojaItem;
  item;
  constructor(private router: Router,private userService:UserServiceService) { }

  ngOnInit() {
    this.item = this.poojaItem;
  }
  viewDetails() {
    this.router.navigate(['/poojadetails/'+this.item.recId]);
  }
  bookNow(id) {
    if(this.userService.userDetails){
      this.router.navigate(['/bookNow/' + id]);
    }
    else{
      this.router.navigate(['/login']);
    }
  }
}
