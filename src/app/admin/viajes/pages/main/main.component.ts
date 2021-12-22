import { Component, OnInit } from '@angular/core';
import { TravelsService } from 'src/app/services/travels.service';
import { Travel } from '../../../../models/travels.model';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private travelService:TravelsService) { }


  travelArr:Travel[] = []

  ngOnInit(): void {
    this.travelService.getAllTravels()
    this.travelService.allTravels$.subscribe(resp => this.travelArr.push(...resp))
  }

  imprimir(){
    console.log(this.travelArr)
  }
}
