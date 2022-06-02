import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  public orders:any = [];

  constructor(private nav: NavController, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem("orders") != null){
      this.orders = JSON.parse(localStorage.getItem("orders"));
      this.orders = this.orders.reverse();
    }
  }

  NavigationBack(){
    this.nav.back()
  }

  Navigate2Order(item){
    this.router.navigate(['/order-detail/'+item.id])
  }

}
