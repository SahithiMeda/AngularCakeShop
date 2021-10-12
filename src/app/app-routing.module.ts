import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {CakeDetailsComponent} from './cake-details/cake-details.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';
import { RestrictUserService } from './restrict-user.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  {path:'login', component:LoginComponent},
  {path:'cart', canActivate:[RestrictUserService] ,component:CartComponent},
  {path:'cake/:id' , component: CakeDetailsComponent},
  {path:"search" , component:SearchComponent },
  {path:"checkout" ,canActivate:[RestrictUserService], component: CheckoutComponent,children:[
    {path:'',redirectTo:"cartsummary" ,pathMatch:'prefix'},
    {path:'cartsummary' , component:CartSummaryComponent},
    {path:'address' , component:AddressComponent},
    {path:'payment' , component:PaymentComponent},
    {path:'ordersummary' , component:OrderSummaryComponent},
  ] },
  {path:"admin" , loadChildren : ()=> import("./admin/admin.module").then(m=>m.AdminModule)},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
