import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private _HttpClient:HttpClient  ) { }

  headers:any = {Token:localStorage.getItem('etokn')}


addToCart( prodauctId:string ):Observable<any>     {






 return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart' , {  productId: prodauctId }  
 
 
 , 






)








}


getUserCart()  :Observable<any>  {


return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart', )








}



removeItem( prodact:string ) :Observable<any>  {


return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${prodact}` ,


{

headers:this.headers 


}




)







}




upDateCartProdact(idProduct:string , newcuwant:number) :Observable <any>{



return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${idProduct}`  ,



{
  count: newcuwant
}

,
{

headers:this.headers

}





)




}






chekOut(cartId :string ,userData:object) :Observable<any> {


return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`


,

{
  shippingAddress:userData
}

,

{
  headers:this.headers
}







)







}

















}
