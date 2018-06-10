import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-punyakshetrams-categories',
  templateUrl: './punyakshetrams-categories.component.html',
  styleUrls: ['./punyakshetrams-categories.component.css']
})
export class PunyakshetramsCategoriesComponent implements OnInit {

  punyakshetram = [];
  data1;


  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    const url = 'http://localhost/sreepoojaa/controllors/poojas_punyakshetrams.php';
    this.route.params.subscribe(data => {
      if (data.categoryId == 'all' || data.categoryId>2 || data.categoryId<1) {
        this.punyakshetram = [];
        this.data1 = {
          crud: 'fetchAll',
          tableName: 'punyakshetrams'
        }
        this.http.post(url, this.data1).subscribe((res: any) => {
          if (res) {
            let itemsLength = res.length;
            for (var item = 0; item < itemsLength; item++) {
              this.punyakshetram.push(res[item]);
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
        this.punyakshetram = [];
        this.data1 = {
          crud: 'fetchCategory',
          tableName: 'punyakshetrams',
          categoryId: data.categoryId
        }
        this.http.post(url, this.data1).subscribe((res: any) => {
          if (res) {
            let itemsLength = res.length;
            for (var item = 0; item < itemsLength; item++) {
              this.punyakshetram.push(res[item]);
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
