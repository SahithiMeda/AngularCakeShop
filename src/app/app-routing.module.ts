import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryBlogComponent } from './country-blog/country-blog.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Italy', component: CountryBlogComponent },
  { path: 'signIn', component: SigninComponent },
  {path:'logIn', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
