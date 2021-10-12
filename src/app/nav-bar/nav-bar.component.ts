import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  searchValue: any;
  userloggedin: any = false
  faSearch = faSearch
  faShoppingCart = faShoppingCart
  faSignOutAlt = faSignOutAlt

  constructor(private router : Router) { 
    if(localStorage.token){
      this.userloggedin=true;
    }
  }
  search(){
    this.router.navigate(["/search"],{queryParams:{q:this.searchValue}})
  }
logout(){
  localStorage.clear();
  this.userloggedin=false;
}
  ngOnInit(): void {
  }

}
