import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/auth.model';
import { LoginService } from '../../../services/authServices/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  loginValue:Login = {
    email: '',
    password: ''
  }

  errorDatos:boolean = false
  sesionIniciada:boolean = false

  constructor(private formbuilder: FormBuilder, private router: Router, private loginService: LoginService) {

    this.login = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })

  }

  ngOnInit(): void {
  }


  loginData(){
    this.loginValue.email = this.login.value.email;
    this.loginValue.password = this.login.value.password;

    this.loginService.loginAuth(this.loginValue).subscribe((user) => {
      this.loginService.saveUser(user)
      this.dtoOK()
      setTimeout(() => {
        this.router.navigate(['/admin'])
      },1000)

    },(error) => {
      this.errorDatos = true
    })
  }

  dtoOK(){
    this.errorDatos = false
    this.sesionIniciada = true
  }
}
