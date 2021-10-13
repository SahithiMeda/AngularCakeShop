import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { EmailValidatorService } from '../email-validator.service';
import { Router } from '@angular/router';
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
  InvalidLogin: string | undefined;
   constructor(private http:HttpClient,private validator :EmailValidatorService,private router:Router ){ 
     this.userInput.email="";
     this.userInput.password="";
   }
 
  login(){
    if(this.validator.validateEmail(this.userInput.email)){
    const api= "https://apifromashu.herokuapp.com/api/login"
    console.log( this.userInput.email+" "+this.userInput.password+" ")
    this.http.post(api,this.userInput).subscribe((response : any)=>{
      if(response.token){
        localStorage.email = response.email
        localStorage.token = response.token
        this.InvalidLogin=""
        this.router.navigate(['/']);
      console.log('user logged in')
      }
      else{
        this.InvalidLogin="Invalid credentials"
      }
    },
      (error)=>console.log(error)
    )
  }
  else{
    console.log("Invalid email")
  }
   }
   ngOnInit(): void {
   }

}
