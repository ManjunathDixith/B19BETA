import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faTrash, faPlus, faMinus, faPlusSquare,faMinusSquare} from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CartService } from 'src/app/services/cart.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  signinForm!: FormGroup;
    faTrash = faTrash;

  faPlus = faPlus ;
  faMinus = faMinus ;
  faPlusSquare = faPlusSquare;
  faMinusSquare = faMinusSquare;
  
  private unsubscribe$ = new Subject<void>();
  public booklist : any = [];
  public total =   0  ;
  totalPrice!: number;
  public grandTotal !: number;

    

   quantity : any = 1;
  public bookId: number= 0;

  constructor(private router: Router,
    private cartService : CartService,
    private subscriptionService: SubscriptionService) { }

  ngOnInit() {
    
    this.cartService.getProducts()
    .subscribe(res => {
      this.booklist = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
    }

  startShoping(){
    this.router.navigateByUrl('/home');
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }
  

   increase(){
     if(this.quantity != 5){
       this.quantity = this.quantity +1
     }
    } 

  decrease(){
    if(this.quantity != 1){
      this.quantity = this.quantity -1
    }
    
  }
  


   priceIncrease(book: any){
     book.total = book.price * book.quantity

   }

   priceDecrease(book: any){
     book.total =book.price * book.quantity
  }

}
