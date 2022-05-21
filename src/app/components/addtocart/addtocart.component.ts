import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.scss']
})
export class AddtocartComponent implements OnInit {

  constructor( private snackBarService: SnackbarService) { }
  addToCart(){
    this.snackBarService.showSnackBar('Item added to cart')
    }
 addToWish(){
  this.snackBarService.showWishList('This Item added to Wishlist')
 }
  ngOnInit(): void {
  }

}
