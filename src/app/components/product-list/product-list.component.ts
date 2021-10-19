import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    new Product('P01', 'Hat'),
    new Product('P02', 'jeans'),
  ]
  constructor() { }

  changeStarRating(message: string){
    console.log(`Message: ${message}`);
  }

  ngOnInit() {
  }

}
