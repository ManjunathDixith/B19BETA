import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtocartComponent } from './components/addtocart/addtocart.component';

const routes: Routes = [
  {
    path: 'addtocart',
    component: AddtocartComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
