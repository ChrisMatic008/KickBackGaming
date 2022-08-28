import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  http: any;
  cart: any;

  constructor() { }

  ngOnInit(): void {

    this.loadCart();

  }
  loadCart(): void {
    let url = 'http://localhost:3000/cart';
    this.http.get(url).subscribe((response: any) => {
      console.log(response);
      this.cart = response;
    });
  }

}
