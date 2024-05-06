import { Component, OnInit } from '@angular/core';
import { EcomdatapService } from '../ecomdatap.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _EcomdatapService:EcomdatapService ,private _CartService:CartService , private _ToastrService:ToastrService){}

  prodacts:any[]=[]

categores:any[]=[]

sershTerm:string ='';



addCart(id:string):void {

this._CartService.addToCart(id).subscribe({

next:(respons)=>{
  console.log(respons);

  this._ToastrService.success(respons.message)
},





error:(errr)=>{ 

  console.log(errr);
  
}



  
})






}

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  mineSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay:true,
items:1,
    nav: true
  }








ngOnInit():void {
    this._EcomdatapService.getAllProdacts().subscribe({

next:(response)=>{


this.prodacts = response.data


this._EcomdatapService.getcategores().subscribe({

next:(respons)=>

 this.categores = respons.data 




})


}


    })
}




}



