import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList : any = []
  public bookList = new BehaviorSubject<any>([]);
  quantity!: number;
  total !: number;
  grandTotal : number = 0;



  constructor(private http: HttpClient) { }

  getProducts(){
   return this.bookList.asObservable();
  }

  setProducts(product : any){
   this.cartItemList.push(...product);
   this.bookList.next(product);
  }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.bookList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  removeCartItem(product : any){
    this.cartItemList.map((a: any, index: any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
  }
  removeAllCart(){
    this.cartItemList = []
    this.bookList.next(this.cartItemList);
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal +=(a.total);
    })
    return grandTotal;
  }
}


