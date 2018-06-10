import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-punyakshetram-category-item',
  templateUrl: './punyakshetram-category-item.component.html',
  styleUrls: ['./punyakshetram-category-item.component.css']
})
export class PunyakshetramCategoryItemComponent implements OnInit {

  constructor(private router:Router){}

  @Input() item;
  punyakshetram;
  ngOnInit() {
    this.punyakshetram = this.item;
  }
  viewDetails(id){
    this.router.navigate(['/punyakeshtramdetails/'+id]);
  }

}
