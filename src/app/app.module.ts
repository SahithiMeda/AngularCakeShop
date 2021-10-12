import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CakeComponent } from './cake/cake.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import {NgxUiLoaderModule} from 'ngx-ui-loader';
import { CakeDetailsComponent } from './cake-details/cake-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchComponent } from './search/search.component';
import { FormaterPipe } from './formater.pipe';
import { ZoomHighlightDirective } from './zoom-highlight.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { AddressFormaterPipe } from './address-formater.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    CakeComponent,
    HomeComponent,
    SignupComponent,
    CartComponent,
    LoginComponent,
    CakeDetailsComponent,
    SearchComponent,
    FormaterPipe,
    ZoomHighlightDirective,
    PageNotFoundComponent,
    CheckoutComponent,
    CartSummaryComponent,
    AddressComponent,
    PaymentComponent,
    OrderSummaryComponent,
    AddressFormaterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
