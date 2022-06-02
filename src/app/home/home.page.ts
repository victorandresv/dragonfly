import { Component } from '@angular/core';
import data from '../../assets/products.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public products:any = [];
  public line:any = [];

  constructor(private router: Router){
    for(let n = 0;n < data.length; n++){
      if(this.line.length  == 2){
        this.products.push(this.line);
        this.line = [];
      }
      this.line.push(data[n])
    }
    if(this.line.length > 0){
      this.products.push(this.line);
        this.line = [];
    }
  }

  NavigateTo(item:any){
    this.router.navigate(['/product/'+window.btoa(JSON.stringify(item))])
  }

  Navigate2Cart(){
    this.router.navigate(['/cart']);
  }

  Navigate2Profile(){
    this.router.navigate(['/profile']);
  }

}
