import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userInput: any={
    email: String,
    password: String
 
  }
   constructor(private http:HttpClient) { 
     this.userInput.email="";
     this.userInput.password="";
   }
 
   signUp(){
     debugger
    const api= "https://apifromashu.herokuapp.com/api/login"
    console.log( this.userInput.email+" "+this.userInput.password+" ")
    this.http.post(api,this.userInput).subscribe((response : any)=>{
      if(response.token)
      console.log('logged in')
    },
      (error)=>console.log(error)
    )
   }
   ngOnInit(): void {
   }

}
