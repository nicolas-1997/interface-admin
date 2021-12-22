import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusTravelTraductor'
})
export class StatusTravelTraductorPipe implements PipeTransform {

  transform(value: number | string): string {
    if(value === 1 || value === "1"){
      return 'pendiente a retirar'
    }
    else if(value === 2 || value === "2"){
      return 'retiro asignado'
    }
    else if(value === 3 || value === "3"){
      return 'retirado'
    }
    else if(value === 4 || value === "4"){
      return 'pendiente de reparacion'
    }
    else if(value === 5 || value === "5"){
      return 'reparado'
    }
    else if(value === 6 || value === "6"){
      return 'entrega asignada'
    }
    else if(value === 7 || value === "7"){
      return 'pendiente de entrega'
    }
    else if(value === 8 || value === "8"){
      return 'entregado'
    }
    else if(value === 9 || value === "9"){
      return 'recibido'
    }
    else if(value === 10 || value === "10"){
      return 'renunciado'
    }
    else{
      return 'estado desconocido'
    }
  }

}
