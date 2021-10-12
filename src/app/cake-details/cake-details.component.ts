import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cake-details',
  templateUrl: './cake-details.component.html',
  styleUrls: ['./cake-details.component.css']
})
export class CakeDetailsComponent implements OnInit {
cake: any={};
  constructor(private route : ActivatedRoute , private router : Router ,private http: HttpClient , private loader : NgxUiLoaderService) { 
    this.loader.start()
    var cakeid = this.route.snapshot.params.id
    var url = "http://apifromashu.herokuapp.com/api/cake/"+cakeid
    this.http.get(url).subscribe((response:any)=>{
      console.log("Response from cake details api" , response)
      this.cake = response.data
      this.loader.stop()
    }, (error)=>{
      this.loader.stop()
      console.log("error from cake details api" , error)
    })
  }

  addToCart(){
    if(localStorage.token){
      var requestObj = {
        cakeid:this.cake.cakeid,
        price:this.cake.price,
        weight:this.cake.weight,
        image:this.cake.image,
        name:this.cake.name,
      }
      let myheaders = new HttpHeaders()
      myheaders = myheaders.append("authtoken", localStorage.token)
      var apiurl = "https://apifromashu.herokuapp.com/api/addcaketocart"
      this.http.post(apiurl,requestObj, {
        headers:myheaders
      }).subscribe((response:any)=>{
        console.log("Response from add to cart api" , response)
        if(response.data){
            this.router.navigate(["/cart"])
        }
      }, (error)=>{
        console.log("Error while adding to cart" , error)
      })
    }
    else{
      alert("login to add to cart ")
    }
   
  }
  ngOnInit(): void {
  }

}
