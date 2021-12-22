import { Component, OnInit} from '@angular/core';
import { LoginService } from './services/authServices/login.service';
import { Router } from '@angular/router';
import { Login, User } from './models/user.model';
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'M6T1-V1';

  constructor(private loginService:LoginService, private router:Router) {

  }
  ngOnInit(): void {
    let user = this.loginService.getUser()
    let dto = {
      email : user.email,
      password: user.password
    }

    if(user){
      this.loginService.loginAuth(dto).subscribe()
      // this.router.navigate(['/admin'])
    }
  }
}
