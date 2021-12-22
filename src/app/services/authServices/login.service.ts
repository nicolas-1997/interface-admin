import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/models/auth.model';
import { LocalStorageData, User } from 'src/app/models/user.model';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, pipe } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private localStorageData:LocalStorageData = {
    "address":'',
    "cellPhone": 0,
    "email": '',
    "fullName": '',
    "password": '',
    "id": 0,
    "rol": {
      "id": 0,
      "isDeleted": 0,
      "name": ''
    }
  }

  private api_url:string = `${environment.URL_API}`;
  private user = new BehaviorSubject<LocalStorageData | null>(null);

  userLogued$ = this.user.asObservable()

  constructor(private http: HttpClient) { }

  loginAuth(dto:Login){
    return this.http.get<User>(`${this.api_url}/api/Login?email=${dto.email}&password=${dto.password}`)
  }

  // .pipe(
  //   tap(user => this.user.next(user)))



  saveUser(resp:User){
    this.localStorageData = resp
    localStorage.setItem("userLogued", JSON.stringify(this.localStorageData));
  }
  getUser(){
    let getUser = localStorage.getItem("userLogued");
    let parseUser:LocalStorageData = JSON.parse(`${getUser}`)
    this.user.next(parseUser)



    return parseUser
  }

}
