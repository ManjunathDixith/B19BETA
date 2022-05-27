import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBook, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faBook = faBook;
  faCartShopping = faCartShopping;
  public totalItem : number = 0;
  

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
    this.totalItem = res.length;
    })
  }

  openCart(){
    this.router.navigateByUrl('/cart');
  }
  openhome(){
    this.router.navigateByUrl('/home');
  }
}
