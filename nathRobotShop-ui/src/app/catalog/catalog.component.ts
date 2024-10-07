import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductsService } from './products.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
products:any
filter:string=''


constructor(private cartSvc:CartService, private productSvc:ProductsService){
  
 
}


ngOnInit(){
  this.productSvc.getProducts().subscribe((products)=>{
    this.products=products;
  });
}

getFilteredProducts(){
  return this.filter===''
  ? this.products
  : this.products.filter((product:any)=>product.category===this.filter);
}

addToCart(product:IProduct){
  this.cartSvc.add(product)
}



}
  

