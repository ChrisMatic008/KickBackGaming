import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',  component: AppComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'sign-up', component: SignUpComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
