import { Component, OnInit } from '@angular/core';
import { Travel } from '../../../../models/travels.model';
import { TravelsService } from 'src/app/services/travels.service';
@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.scss']
})
export class PendientesComponent implements OnInit {

  constructor(private travelService:TravelsService) { }

  myArr:Travel[] = []

  showArr:Travel[] = []



  ngOnInit(): void {
    this.travelService.getAllTravels()
    this.travelService.allTravels$.subscribe(resp => {
      this.myArr.push(...resp)
      this.filtro();
    });

  }


  filtro(){
    for(let i = 0; i <= this.myArr.length; i++){
      if(this.myArr[i].lastStatusTravel){
        if(this.myArr[i].lastStatusTravel === 1 || this.myArr[i].lastStatusTravel === 5){
          this.showArr.push(this.myArr[i])
        }
      }
    }
  }
}
