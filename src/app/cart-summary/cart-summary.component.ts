import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems: any = [];
  totalPrice: number = 0;
  constructor(private dataService: ShareDataService) {
    this.cartItems = dataService.cakes;
    this.totalPrice = dataService.totalPrice;
  }


  ngOnInit(): void {
  }

}
