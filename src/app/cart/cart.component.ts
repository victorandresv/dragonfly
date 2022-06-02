import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  public cart:any = [];

  constructor(private nav: NavController) { 
    
  }

  ngOnInit() {
    if(sessionStorage.getItem("cart") != null){
      this.cart = JSON.parse(sessionStorage.getItem("cart"));
    }
  }

  NavigationBack(){
    this.nav.back()
  }

}
