import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poojas-categories',
  templateUrl: './poojas-categories.component.html',
  styleUrls: ['./poojas-categories.component.css']
})
export class PoojasCategoriesComponent implements OnInit {

  poojas = [];
  data1;
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    const url = 'http://localhost/sreepoojaa/controllors/poojas_punyakshetrams.php';
    this.route.params.subscribe(data => {
      if (data.categoryId == 'all' || data.categoryId>4 || data.categoryId<1) {
        this.poojas=[];
        this.data1 = {
          crud: 'fetchAll',
          tableName: 'poojas'
        }
        this.http.post(url, this.data1).subscribe((res: any) => {
          if (res) {
            let itemsLength = res.length;
            for (var item = 0; item < itemsLength; item++) {
              this.poojas.push(res[item]);
            }
          }
          else {
            console.log('failed');
          }
        }, err => {
          console.log('Error');
        });
      }
      else {
        this.poojas=[];
        parseInt(data.categoryId);
        this.data1 = {
          crud: 'fetchCategory',
          tableName: 'poojas',
          categoryId: parseInt(data.categoryId)
        }
        this.http.post(url, this.data1).subscribe((res: any) => {
          if (res) {
            let itemsLength = res.length;
            for (var item = 0; item < itemsLength; item++) {
              this.poojas.push(res[item]);
            }
          }
          else {
            console.log('failed');
          }
        }, err => {
          console.log('Error');
        });
      }
    });
  }

}
