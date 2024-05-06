import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
constructor( private _FormBuilder:FormBuilder , private _ActivatedRoute:ActivatedRoute , private _CartService:CartService){}

cartId:any = ''

ngOnInit(): void {

this._ActivatedRoute.paramMap.subscribe({


next :(params)=>{

this.cartId = params.get('id')


}



})




}






Checkout:FormGroup = this._FormBuilder.group({


details :[''],

phone:[''],

city  :['']
















})


handelform(){

console.log();


this._CartService.chekOut(this.cartId ,this.Checkout.value).subscribe({

next:(responss)=>{

console.log(responss);

if(responss.status=='success'){


window.open(responss.session.url ,'_self')
  
  
  


}









}






})




}



















































}
