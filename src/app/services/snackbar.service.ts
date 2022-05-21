import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';  
@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(public snackBar: MatSnackBar) { }
  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }
  showWishList(message: string){
    this.snackBar.open(message, 'close',{
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    })
  }
}
