import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  userAddress : any = {}
  addAddress(){
    this.dataShare.address = this.userAddress
    this.router.navigate(["/checkout/payment"])
  }
  constructor(private router: Router , private dataShare: ShareDataService) {
    
   }

  ngOnInit(): void {
  }

}
