import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})

export class CartComponent {
  mas;
  
  constructor(private cartService: CartService) {
    this.mas = this.cartService.getItems();
    console.log(this.cartService.getItems())
  }
  
}