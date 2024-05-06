import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcomdatapService {

  constructor(private _HttpClient:HttpClient ) { }


getAllProdacts():Observable<any> {

return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products')




}




getProductDitals(id:string):Observable<any> {

return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)




}


getcategores():Observable<any>{


return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)





}





}
