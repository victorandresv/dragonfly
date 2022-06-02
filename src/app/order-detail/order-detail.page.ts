import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  public order_id: string;
  public products: any;

  constructor(private activatedRoute:ActivatedRoute, private nav: NavController) { 
    this.activatedRoute.paramMap.subscribe(
      (data) => {}
    );
    this.order_id = this.activatedRoute.snapshot.paramMap.get('order');
  }

  ngOnInit() {
    if(localStorage.getItem("orders") != null){
      const orders = JSON.parse(localStorage.getItem("orders"));
      orders.forEach(element => {
        if(element.id == this.order_id){
          this.products = element.products;
        }
      });
    }
  }

  NavigationBack(){
    this.nav.back()
  }

}
