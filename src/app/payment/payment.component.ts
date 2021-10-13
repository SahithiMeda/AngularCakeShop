import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private dataService:ShareDataService , private http :HttpClient,private route:Router) { 
  }

  placeOrder(){
    if(this.dataService.totalPrice && this.dataService.address){
      var requestObj = {
        ...this.dataService.address,
        cakes:this.dataService.cakes,
        price:this.dataService.totalPrice
      }
      var url = "https://apifromashu.herokuapp.com/api/addcakeorder"
      console.log(requestObj)
       var myheaders = new HttpHeaders()
       myheaders = myheaders.append("authtoken", localStorage.token)
      this.http.post(url,requestObj,{
        headers:myheaders
      }).subscribe((response:any)=>{
        console.log(response)
        this.dataService.orderId=response.order.orderid;
        alert("your order is placed")
        this.route.navigate(["/checkout/ordersummary"])
      }, (error)=>{
        console.log(error)
      })
    }
    else if (!this.dataService.address){
     this.route.navigate(["/checkout/address"])
    }
    else{
      this.route.navigate(["/cart"])
    }
 
  }

  ngOnInit(): void {
  }

}
