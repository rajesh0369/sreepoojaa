import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-poojadetails',
  templateUrl: './poojadetails.component.html',
  styleUrls: ['./poojadetails.component.css']
})
export class PoojadetailsComponent implements OnInit {
  poojadata;
  poojaId;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private userSevice: UserServiceService) { }

  ngOnInit() {
    const url = 'http://localhost/sreepoojaa/controllors/poojas_punyakshetrams.php';
    this.route.params.subscribe(data => {
      this.poojadata = [];
      this.poojaId = null;
      this.poojaId = data.poojaId;
      let data1 = {
        crud: 'fetchPoojaPunyakshetram',
        tableName: 'poojas',
        id: this.poojaId
      }
      this.http.post(url, data1).subscribe((res: any) => {
        if (res) {
          this.poojadata = res[0];
        }
        else {
          console.log('failed');
        }
      }, err => {
        console.log('Error');

      });
    });
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
