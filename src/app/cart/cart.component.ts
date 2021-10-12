import { Component, OnInit } from '@angular/core';
import {faPlus,faMinus , faTrash} from "@fortawesome/free-solid-svg-icons"
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartItems: any=[]
faPlus=faPlus
faMinus = faMinus
faTrash = faTrash
totalPrice: number=0

removeCartItem(index:any){
  this.loader.start()

  var apiurl = "https://apifromashu.herokuapp.com/api/removecakefromcart"
  var myheaders = new HttpHeaders()
  myheaders = myheaders.append("authtoken" , localStorage.token)
  this.http.post(apiurl,{
    cakeid:this.cartItems[index].cakeid
  },{
    headers:myheaders
  }).subscribe((response:any)=>{
    this.loader.stop()
    console.log("Response from cake cart api" , response)
    this.totalPrice = this.totalPrice-(this.cartItems[index].price*this.cartItems[index].quantity)
    this.cartItems.splice(index,1)
  } , (error)=>{
    this.loader.stop()
    console.log("Error removing items" , error)
  }) 
}

constructor( private http:HttpClient , private loader : NgxUiLoaderService, private route:Router,private dataService:ShareDataService) { 
  this.loader.start()
  var apiurl = "https://apifromashu.herokuapp.com/api/cakecart"
  var myheaders = new HttpHeaders()
  myheaders = myheaders.append("authtoken" , localStorage.token)
  this.http.post(apiurl,{},{
    headers:myheaders
  }).subscribe((response:any)=>{
    this.loader.stop()
    console.log("Response from cake cart api" , response)
    this.cartItems = response.data
    this.cartItems.forEach((each:any)=>{
      this.totalPrice = this.totalPrice + each.price*each.quantity
     })
  } , (error)=>{
    this.loader.stop()
    console.log("Error getting cart items" , error)
  })
  
}
increment(index:any){
  this.loader.start()

  let myheaders = new HttpHeaders()
  myheaders = myheaders.append("authtoken", localStorage.token)
  var apiurl = "https://apifromashu.herokuapp.com/api/addcaketocart"
  this.http.post(apiurl,this.cartItems[index], {
    headers:myheaders
  }).subscribe((response:any)=>{
    this.loader.stop()

    console.log("Response from add to cart api" , response)
    if(response.data){
      this.cartItems[index].quantity++
      this.totalPrice = this.totalPrice+this.cartItems[index].price
    }
  }, (error)=>{
    this.loader.stop()

    console.log("Error from add to cart api" , error)
  })
 
 
}
decrement(index:any){
  this.loader.start()
  var apiurl = "https://apifromashu.herokuapp.com/api/removeonecakefromcart"
  var myheaders = new HttpHeaders()
  myheaders = myheaders.append("authtoken" , localStorage.token)
  this.http.post(apiurl,{
    cakeid:this.cartItems[index].cakeid
  },{
    headers:myheaders
  }).subscribe((response:any)=>{
    this.loader.stop()
    this.cartItems[index].quantity--
    this.totalPrice = this.totalPrice-this.cartItems[index].price
    console.log("Response from remove cake cart api" , response)
  } , (error)=>{
    this.loader.stop()
    console.log("Error in get cart items from api" , error)
  })
}
checkout():void{
  this.dataService.cakes=this.cartItems
  this.dataService.totalPrice=this.totalPrice
  this.route.navigate(['/checkout'])
}
  ngOnInit(): void {
  }
}
