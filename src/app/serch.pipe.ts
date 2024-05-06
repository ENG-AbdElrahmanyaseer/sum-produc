import { Pipe, PipeTransform } from '@angular/core';
import { product } from './product';

@Pipe({
  name: 'serch'
})
export class SerchPipe implements PipeTransform {

  transform(prodact:product[],term:string): product[] {
    return prodact.filter((product)=>product.title.toLowerCase().includes(term));
  }

}
