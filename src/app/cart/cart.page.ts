import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  public cart:any = [];
  public total:number = 0;

  constructor(private nav: NavController) { 
    
  }

  ngOnInit() {
    if(sessionStorage.getItem("cart") != null){
      this.cart = JSON.parse(sessionStorage.getItem("cart"));
    }
    this.cart.forEach(element => {
      this.total = this.total + (element.price*element.quantity);
    });
  }

  NavigationBack(){
    this.nav.back()
  }

  OrderPlace(){
    let orders:any = []
    if(localStorage.getItem("orders") != null){
      orders = JSON.parse(localStorage.getItem("orders"));
    }
    const order = {
      id: new Date().getTime(),
      products: this.cart
    }
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
    sessionStorage.clear();
    this.nav.navigateRoot('/')
  }

}
