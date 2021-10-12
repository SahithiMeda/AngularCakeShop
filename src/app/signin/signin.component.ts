import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 userInput: any={
   name: String ,
   email: String,
   password: String

 }
  constructor(private http:HttpClient) { 
    this.userInput.name="";
    this.userInput.email="";
    this.userInput.password="";
  }

  signIn(){
   const api= "https://apifromashu.herokuapp.com/api/register"
   console.log(this.userInput.name+" " +this.userInput.email+" "+this.userInput.password+" ")
   this.http.post(api,this.userInput).subscribe((response : any)=>{
     if(response.message=='User Registered')
     console.log('registered')
   },
     (error)=>console.log(error)
   )
  }
  ngOnInit(): void {
  }

}
