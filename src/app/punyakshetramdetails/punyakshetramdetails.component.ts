import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-punyakshetramdetails',
  templateUrl: './punyakshetramdetails.component.html',
  styleUrls: ['./punyakshetramdetails.component.css']
})
export class PunyakshetramdetailsComponent implements OnInit {
  punyakeshtramdata:any;
  punyakshetramId: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    
    const url = 'http://localhost/sreepoojaa/controllors/poojas_punyakshetrams.php';

    this.route.params.subscribe((id) => {
      this.punyakeshtramdata=[];
      this.punyakshetramId = null;
      this.punyakshetramId = id.punyakshetramId;

      let data1 = {
        crud: 'fetchPoojaPunyakshetram',
        tableName: 'punyakshetrams',
        id: this.punyakshetramId
      }
      this.http.post(url, data1).subscribe((res: any) => {
        if (res) {
          this.punyakeshtramdata = res[0];
        }
        else {
          console.log('failed');
        }
      }, err => {
        console.log('Error');
  
      });

    });
    
    
    
  }
}

