import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
var adminusers = ["msahithi2000@gmail.com"]
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  canActivate(){
    var loggedinuser = localStorage.email
    if(localStorage.token){
      if(adminusers.includes(loggedinuser)){
        return true
      }
      else{
        this.router.navigate(["/"])
        return false
      }
    }
    else{
     this.router.navigate(["/"])
      return false
    }
 }
 constructor(private router : Router) { }
}
