import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-poojasiteams',
  templateUrl: './poojasiteams.component.html',
  styleUrls: ['./poojasiteams.component.css']
})
export class PoojasiteamsComponent {
  poojas = [];
  constructor(private http: HttpClient) { }


  ngOnInit() {
    const url = 'http://localhost/sreepoojaa/controllors/poojas_punyakshetrams.php';
    let data1 = {
      crud: 'fetchAll',
      tableName: 'poojas'
    }
    this.http.post(url, data1).subscribe((res: any) => {
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

}
