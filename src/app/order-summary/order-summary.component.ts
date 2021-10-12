import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
cartItems: any=[];
userAddress: any;
totalPrice:number=0;
  constructor(private dataService:ShareDataService) { 
    this.userAddress=dataService.address;
    this.cartItems=dataService.cakes;
    this.totalPrice=dataService.totalPrice;
  }

  ngOnInit(): void {
  }

}
