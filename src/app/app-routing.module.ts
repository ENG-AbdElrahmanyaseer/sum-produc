import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { OuthLayoutComponent } from './outh-layout/outh-layout.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProducteComponent } from './producte/producte.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './auth.guard';
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [

{path:'',

// canActivate:[authGuard], 

component:BlankLayoutComponent ,children:[

{ path:'' , redirectTo:'home'  , pathMatch:'full'    },

  {path:'home',component:HomeComponent},

{path:'cart',component:CartComponent},

{path:'products',component:ProducteComponent}, 



{path:'Checkout/:id',component:CheckoutComponent},

{path:'details/:id',component:DetailsComponent},

{path:'brands',component:BrandsComponent},

{path:'categories',component:CategoriesComponent},

]},
{path:''


, component:OuthLayoutComponent, children:[


  {path:'login',component:LoginComponent},

  
  {path:'Register',component:RegisterComponent},

 


]},



{path:'**' , component:NotfoundComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
