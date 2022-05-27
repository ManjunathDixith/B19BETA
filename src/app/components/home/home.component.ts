import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { faTrash, faPlus, faMinus, faPlusSquare,faMinusSquare} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public bookList: any;
  constructor(private api: ApiService, private cartService : CartService
    ) { }

  ngOnInit(): void {
    this.api.getBooks().subscribe(res =>{
      this.bookList = res; 
      this.bookList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }

 addToCart(book : any){
 this.cartService.addtoCart(book);
 }

}
