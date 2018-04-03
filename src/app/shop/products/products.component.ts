import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products=["wtch","snacks","mobile"]
  constructor() { }

  ngOnInit() {
  }
  giftme = function(counter){
    console.log("buy me this"+this.products[counter]);
    alert("buy me this"+this.products[counter]);
  }


}
