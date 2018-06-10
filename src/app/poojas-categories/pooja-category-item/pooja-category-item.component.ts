import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-pooja-category-item',
  templateUrl: './pooja-category-item.component.html',
  styleUrls: ['./pooja-category-item.component.css']
})
export class PoojaCategoryItemComponent implements OnInit {

  @Input() poojaItem;
  item;
  constructor(private router: Router,private userSevice:UserServiceService) { }

  ngOnInit() {
    this.item = this.poojaItem;
  }
  viewDetails() {
    this.router.navigate(['/poojadetails/'+this.item.recId]);
  }
  bookNow(id) {
    if(this.userSevice.userDetails){
      this.router.navigate(['/bookNow/' + id]);
    }
    else{
      this.router.navigate(['/login']);
    }
  }

}
