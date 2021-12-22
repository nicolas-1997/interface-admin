import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travels.model';
import { TravelsService } from 'src/app/services/travels.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

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
        if(this.myArr[i].lastStatusTravel === 8 || this.myArr[i].lastStatusTravel === 9){
          this.showArr.push(this.myArr[i])
        }
      }
    }
  }
}
