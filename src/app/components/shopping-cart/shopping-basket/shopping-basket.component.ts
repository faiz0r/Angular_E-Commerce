import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css'],
})
export class ShoppingBasketComponent implements OnInit {
  cartItems = [];
  cartTotal = 0;
  cartQty = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
      this.calcCartQuantity();
    });
  }

  calcCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach((item) => {
      this.cartTotal += item.qty * item.price;
    });
  }

  calcCartQuantity() {
    this.cartQty = 0;
    this.cartItems.forEach((item) => {
      this.cartQty += item.qty;
    });
  }

  removeCartItem(item: Product) {
    this.cartService.removeProductFromCart(item.id).subscribe(() => {
      this.loadCartItems();
    });
   }
}
