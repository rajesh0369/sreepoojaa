import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-punyakeshtramiteams',
  templateUrl: './punyakeshtramiteams.component.html',
  styleUrls: ['./punyakeshtramiteams.component.css']
})
export class PunyakeshtramiteamsComponent implements OnInit {

  punyakshetram = [];
  constructor(private http: HttpClient) { }


  ngOnInit() {
    const url = 'http://localhost/sreepoojaa/controllors/poojas_punyakshetrams.php';
    let data1 = {
      crud: 'fetchAll',
      tableName: 'punyakshetrams'
    }
    this.http.post(url, data1).subscribe((res: any) => {
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
}
