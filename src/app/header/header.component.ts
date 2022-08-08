import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template:  `
  <!-- navbar -->
  <div class="navbar is-light is-spaced has-shadow">
    <!-- LOGO -->
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="../assets/images/KickBack Gaming-logos.jpeg" width="75" height="25" alt="Bulma">
      </a>
    <div>
    <span class="icon-text">
  <span class="icon">
    <i class="fas fa-home"></i>
  </span>
  <span>Home</span>
</span>
    <!-- navbar link layout-->
  <div class="navbar-menu tabs is-toggle is-fullwidth">
    <div class="navbar-end">
      <a class="navbar-item" routerLink="home">HOME</a>
      <a class="navbar-item" routerLink="sign-up">SIGN-UP</a>
      <a class="navbar-item" routerLink="login">LOGIN</a>
      <a class="navbar-item" routerLink="cart">CART</a>
    </div>
  </div>
  </div>
  `,
  
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
