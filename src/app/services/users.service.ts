import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './authServices/login.service';
import { BehaviorSubject } from 'rxjs';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url_api:string = `${environment.URL_API}/api/Users`


  constructor(private http:HttpClient, private loginService:LoginService) { }

  private allUsers = new BehaviorSubject<User[]>([]);

  allUsers$ = this.allUsers.asObservable()


  private userOperationId = this.loginService.getUser().id

  getAllUser(){
    return this.http.get<User[]>(`${this.url_api}?userOperation=${this.userOperationId}`).subscribe( (resp) => this.allUsers.next(resp))
  }
  edituser2(email:string, fullName:string){
    console.log(email,fullName)
  }

  editUser(id:number,email:string, fullName:string, address:string, cellPhone:string, isAccepted:boolean, isDeleted:boolean,
           observations:string, password:string, vehicleName:string, vehicleisDeleted:number, rolID:number,rolName:string, rolisDeleted:number ){
    return this.http.post<Register>(`${this.url_api}`,{
      "id": id,
      "email": email,
      "fullName": fullName,
      "address": address,
      "cellPhone": cellPhone,
      "isAccepted": isAccepted,
      "isDeleted": isDeleted,
      "observations": observations,
      "password": password,
      "vehicle": {
        "name": vehicleName,
        "isDeleted": vehicleisDeleted
      },
      "rol": {
        'id': rolID,
        "name": rolName,
        "isDeleted": rolisDeleted
      }
    })
  }
}
