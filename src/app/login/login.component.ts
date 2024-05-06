import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private _AuthService:AuthService ,private Router:Router){}


  msgError:string ="";

  isloading:boolean = false ;


  loginform:FormGroup = new FormGroup({



email :new FormControl(null , [Validators.required ,Validators.email]),
password :new FormControl(null ,[ Validators.required, Validators.pattern(/^\w{6,}$/)]),

  });

  handelForm ():void {

if(this.loginform.value){
  
     
    
    
    this._AuthService.setlogin(this.loginform.value).subscribe({

  next :(rsponse)=>{
if(rsponse.message == 'success'){
this.isloading = false ;




localStorage.setItem('etokn', rsponse.token) 


this._AuthService.seveUserData()

console.log(rsponse);




this.Router.navigate([ '/home',])
}
  },
  error:(error:HttpErrorResponse)=>{
  
  console.log(error);
  }
  
  
  
  
  
      })
  }
else {

this.loginform.markAllAsTouched()


}

}



}


