import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _HttpClient:HttpClient , private _Router:Router) { } 

userdata :any ;



logOut():void{

localStorage.removeItem('etokn');

this._Router.navigate(['/login'])


}



seveUserData(){

if(localStorage.getItem('etokn')!=null){

let encodTocen:any = localStorage.getItem('etokn')

let decodTocan = jwtDecode(encodTocen)


console.log(decodTocan);

this.userdata = decodTocan ;

}




}

setregaster(userdata :object) : Observable<any>{

return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userdata)









}

setlogin(userdata :object) : Observable<any>{

  return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userdata)
  
  
  
  
  
  
  
  
  
  }













}
