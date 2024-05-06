
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

constructor( private _CartService:CartService){}


cartDetals :any = {}



removeCreItem(id :string) :void{


this._CartService.removeItem(id).subscribe({


next:(respons)=>{



this.cartDetals = respons.data


},


error:(erro)=>{  

console.log(erro);



}




})

  
}


ngOnInit(): void {
    

this._CartService.getUserCart().subscribe({

next:(respons)=>{

this.cartDetals = respons.data


console.log(respons.data);


},

error:(errr)=>{

console.log(errr);







}








})

}




shengecount( id:string , count:number) :void{


if(count >0){


  this._CartService.upDateCartProdact(id ,count).subscribe({

    next:(respons)=>{
    
    console.log(respons.data);
    
    this.cartDetals = respons.data

    },
    
    error :(errr)=>{
    
    console.log(errr);
    
    
    
  
    }
    
    })
    



}






}

















}
