import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { Travel } from '../models/travels.model';
@Injectable({
  providedIn: 'root'
})
export class TravelsService {

  private allTravels = new BehaviorSubject<Travel[]>([]);

  allTravels$ = this.allTravels.asObservable()



  api_url: string = `${environment.URL_API}/api/Travel/`

  constructor(private http: HttpClient) { }

  getTravel(value: number) {
    return this.http.get<Travel[]>(`${this.api_url}/1/${value}`)
  }


  getAllTravels() {
    forkJoin(
      this.getTravel(1), this.getTravel(2), this.getTravel(3), this.getTravel(4),
      this.getTravel(5), this.getTravel(6), this.getTravel(7), this.getTravel(8),
    ).subscribe( (resp) => {
      let newResp:Travel[] = resp.flat()
      this.allTravels.next(newResp)
    })
  }

  postTravels(travelId:number, statusTravel:number, cadeteId:number, observation:string){
    return this.http.post<Travel>(`${this.api_url}?travelId=${travelId}&statusTravel=${statusTravel}&userOperation=1&cadeteId=${cadeteId}&isReasigned=false`,[cadeteId,travelId, statusTravel, observation])
  }

  cancelTravel(travelId:number, statusTravel:number, cadeteId:number, observation:string){
    return this.http.post<Travel>(`${this.api_url}?travelId=${travelId}&statusTravel=${statusTravel}&userOperation=1&cadeteId=${cadeteId}&isReasigned=true`,[cadeteId,travelId, statusTravel,observation])
  }


  // http://vcoronado-001-site12.dtempurl.com1/1
}
