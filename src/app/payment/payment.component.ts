import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private dataService:ShareDataService , private http :HttpClient) { 
  }

  placeOrder(){
    if(this.dataService.totalPrice && this.dataService.address){
      var url = "https://apifromashu.herokuapp.com/api/addcakeorder"
      var requestObj = {
        ...this.dataService.address,
        cakes:this.dataService.cakes,
        price:this.dataService.totalPrice
      }
       var myheaders = new HttpHeaders()
       myheaders = myheaders.append("authtoken", localStorage.token)
      this.http.post(url,requestObj,{
        headers:myheaders
      }).subscribe((response:any)=>{
        console.log(response)
      }, (error)=>{
        console.log(error)
      })
    }
 
  }

  ngOnInit(): void {
  }

}
