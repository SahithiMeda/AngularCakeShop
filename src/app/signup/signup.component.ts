import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { EmailValidatorService } from '../email-validator.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 userInput: any={
   name: String ,
   email: String,
   password: String

 }
 userRegistered: boolean=false
  constructor(private http:HttpClient, private validator: EmailValidatorService) { 
    this.userInput.name="";
    this.userInput.email="";
    this.userInput.password="";
  }

  signIn(){
   const api= "https://apifromashu.herokuapp.com/api/register"
   console.log(this.userInput.name+" " +this.userInput.email+" "+this.userInput.password+" ")
   if(this.validator.validateEmail(this.userInput.email)){
   this.http.post(api,this.userInput).subscribe((response : any)=>{
     if(response.message=='User Registered'){
       this.userRegistered=true
     console.log('registered')
     }
   },
     (error)=>console.log(error)
   )
  }
  else{
    console.log("Invalid Email")
  }
  }
  ngOnInit(): void {
  }

}
