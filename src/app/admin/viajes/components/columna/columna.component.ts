import { Component, Input, OnInit } from '@angular/core';
import { TravelPost } from 'src/app/models/travels.model';
import { TravelsService } from 'src/app/services/travels.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-columna',
  templateUrl: './columna.component.html',
  styleUrls: ['./columna.component.scss']
})
export class ColumnaComponent implements OnInit {

  formChangeState:FormGroup

  constructor(private travelService:TravelsService, private formbuilder:FormBuilder ) {
    this.formChangeState = this.formbuilder.group({
      idCadete : ['', Validators.required],
      observation: ['El Admin realizo un cambio de estado'],
      statusTravel: ['' , Validators.required]

    })
   }

  ngOnInit(): void {
  }




  @Input() col1:string = '';
  @Input() col2:string = '';
  @Input() col3:number = 0;

  @Input() cadeteId:number = 0
  @Input() travelId:number = 0;
  // @Input() statusTravel:number = 0;



  state:boolean = false

  changeState(){
    this.state = !this.state
  }

  changeStatusTravel(){
    let cadeteId = this.formChangeState.value.idCadete;
    let newStatusTravel = Number(this.formChangeState.value.statusTravel);
    let observations =  this.formChangeState.value.observation

    if(newStatusTravel === 1 || newStatusTravel === 4 || newStatusTravel === 5){
      this.travelService.postTravels(this.travelId, newStatusTravel, 0, observations).subscribe(
        resp => console.log(resp, "hola soy la resp")
      )
    }
    else if(newStatusTravel === 10){
      this.travelService.cancelTravel(this.travelId, newStatusTravel, cadeteId, observations).subscribe(
        resp => console.log(resp , "hola soy la resp")
      )
    }
    else{
      this.travelService.postTravels(this.travelId, newStatusTravel, cadeteId, observations).subscribe(
        resp => console.log(resp, "hola soy la resp")
      )

    }
  }
}
