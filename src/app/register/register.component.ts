import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import {  Router } from '@angular/router';

Validators
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

constructor( private _AuthService:AuthService ,private Router:Router){}
 
msgError:string ="";

isloading:boolean = false ;

  regasterform:FormGroup = new FormGroup({

name :new FormControl(null ,[Validators.required ,Validators.minLength(3)  , Validators.maxLength(20)]),
email :new FormControl(null , [Validators.required ,Validators.email]),
password :new FormControl(null ,[ Validators.required, Validators.pattern(/^[A-Z][a-z0-9 ]{6,20}$/)]),
rePassword :new FormControl(null ,),
phone  :new FormControl(null ,[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]),

  });

confarmpasword(gruop:FormGroup):void{


let password = gruop.get('password')

let rePassword = gruop.get('rePassword')


if (rePassword?.value ==null || rePassword?.value =='') {
  
rePassword?.setErrors({required:true})


} 

else if (password?.value!= rePassword.value){

rePassword.setErrors({mismath:true})



}


}








  handelForm ():void {

    
    
if(this.regasterform.value){  
  
  this.isloading = true ;
  
  
  this._AuthService.setregaster(this.regasterform.value).subscribe({

  next :(rsponse)=>{
if(rsponse.message == 'success'){

this.Router.navigate([ '/login',])
}
  },
  error:(error:HttpErrorResponse)=>{
  this.isloading = true ;
  console.log(error.error.message);


  this.msgError = error.error.message

  }
  
  
  
  
  
      })
  }

}

}
