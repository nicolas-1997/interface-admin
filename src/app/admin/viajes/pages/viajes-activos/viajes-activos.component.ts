import { Component, OnInit } from '@angular/core';
import { TravelsService } from 'src/app/services/travels.service';
import { Travel } from '../../../../models/travels.model';
@Component({
  selector: 'app-viajes-activos',
  templateUrl: './viajes-activos.component.html',
  styleUrls: ['./viajes-activos.component.scss']
})
export class ViajesActivosComponent implements OnInit {

  constructor(private travelService:TravelsService) { }

  allTravel:Travel[] = []


  ngOnInit(): void {
    this.travelService.getAllTravels()
    this.travelService.allTravels$.subscribe(
      resp => {
        this.allTravel.push(...resp)
        console.log(resp)
      }
    )
  }
}
