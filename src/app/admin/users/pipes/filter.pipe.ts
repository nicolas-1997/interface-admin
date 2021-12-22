import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:User[], arg: string): User[] {
    if(arg === '' || arg.length < 3) return value;
    const resultado = [];
    for(const post of value){
      if(post?.rol.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
          resultado.push(post)
      }
      else if(post?.fullName.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
        resultado.push(post)
      }
      else if(post?.address.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
        resultado.push(post)
      }
      else if( post?.email.toLowerCase().indexOf(arg.toLowerCase()) > -1    ){
        resultado.push(post)
      }
      else if(post?.cellPhone.toString().toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
        resultado.push(post)
      }
      else if(post?.vehicle){
        if(post?.vehicle.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
          resultado.push(post)
        }
      }
    }

    return resultado;
  }

}


// ||
//         post?.fullName.toLowerCase().indexOf(arg.toLowerCase()) > -1  ||
//         post?.address.toLowerCase().indexOf(arg.toLowerCase()) > -1   ||
//         post?.email.toLowerCase().indexOf(arg.toLowerCase()) > -1     ||
//         post?.cellPhone.toString().toLowerCase().indexOf(arg.toLowerCase()) > -1     ||
//         post?.vehicle.name.toLowerCase().indexOf(arg.toLowerCase()) > -1
