import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  // viewPunyakshetrams(param){
  //   this.router.navigate(['/punyakshetramsCategories/'+param]);
  // }
  // viewPoojas(param){
  //   this.router.navigate(['/poojasCategories/'+param]);
  // }
}
