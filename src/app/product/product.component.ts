import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  public product:any;
  public quantity: number = 1;

  constructor(private activatedRoute:ActivatedRoute, private router: NavController) { 
    this.activatedRoute.paramMap.subscribe(
      (data) => {}
    );
    let product = this.activatedRoute.snapshot.paramMap.get('product');
    product = window.atob(product);
    product = JSON.parse(product);

    this.product = product;

  }

  ngOnInit() {}

  NavigationBack(){
    this.router.back()
  }

  AddQuantity(){
    console.log('plus')
    this.quantity++;
  }

  LessQuantity(){
    if(this.quantity > 1){
      this.quantity--;
    }
  }

}
