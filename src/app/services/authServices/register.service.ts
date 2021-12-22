import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LocalStorageData, User } from 'src/app/models/user.model';
import { Register } from '../../models/register.model';
import { Rol } from '../../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {



  private api_url:string = `${environment.URL_API}`;


  constructor(private http: HttpClient) { }



  register(dto:Register){
    return this.http.post<Register>(`${this.api_url}/api/Users`,dto)
  }

}
