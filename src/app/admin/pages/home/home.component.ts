import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/authServices/login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginService.userLogued$.subscribe(resp => {
      this.name = resp?.fullName
    })
  }

  name: string | undefined = ''
}
