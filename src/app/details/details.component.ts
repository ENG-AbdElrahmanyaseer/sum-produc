import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcomdatapService } from '../ecomdatap.service';
import { product } from '../product';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute , private _EcomdatapService:EcomdatapService){} 

prodactDitals:product = {} as product ;

prodactSlider: OwlOptions = {
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



  ngOnInit(): void {
this._ActivatedRoute.paramMap.subscribe(
{

next:(params)=>{

let idProdact :any =   params.get('id')

this._EcomdatapService.getProductDitals(idProdact).subscribe({

next:(response)=>{

  this.prodactDitals = response.data ;








}







})

}


}

)
  }
}
