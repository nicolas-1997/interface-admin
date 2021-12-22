import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/models/travels.model';
import { TravelsService } from 'src/app/services/travels.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

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
        if(this.myArr[i].lastStatusTravel === 2 || this.myArr[i].lastStatusTravel === 3 || this.myArr[i].lastStatusTravel === 6 || this.myArr[i].lastStatusTravel === 7){
          this.showArr.push(this.myArr[i])
        }
      }
    }
  }
}
