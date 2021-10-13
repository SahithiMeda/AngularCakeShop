import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
orderId:any;
  constructor(private dataService:ShareDataService,private route:Router) { 
    if(!dataService.orderId){
      route.navigate(['/checkout/payment'])
    }
    else if(!dataService.address){
      route.navigate(['/checkout/address'])
    }
    else if(!dataService.totalPrice){
      route.navigate(['/cart'])
    }
    this.orderId=dataService.orderId
    this.userAddress=dataService.address;
    this.cartItems=dataService.cakes;
    this.totalPrice=dataService.totalPrice;
  }

  ngOnInit(): void {
  }
  ngOnDestroy():void{
    this.orderId=null;
  }

}
