import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProducteComponent } from './producte/producte.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsComponent } from './details/details.component';
import { NavBlankComponent } from './nav-blank/nav-blank.component';
import { NavAuthComponent } from './nav-auth/nav-auth.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { OuthLayoutComponent } from './outh-layout/outh-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DeteilsComponent } from './deteils/deteils.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SerchPipe } from './serch.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyhttpInterceptor } from './myhttp.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProducteComponent,
    BrandsComponent,
    CategoriesComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    DetailsComponent,
    NavBlankComponent,
    NavAuthComponent,
    BlankLayoutComponent,
    OuthLayoutComponent,
    DeteilsComponent,
    SerchPipe,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule, 
    FormsModule,
    ToastrModule.forRoot(),

  ],
  providers: [

{provide:HTTP_INTERCEPTORS ,useClass:MyhttpInterceptor,multi:true}



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
