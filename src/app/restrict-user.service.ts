import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestrictUserService {
  canActivate() : any{
    if(localStorage.token){
      return true
    }
    else{
      this.router.navigate(["/"])
      return false
    }
}
constructor(private router : Router) { }
}
