import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { LoginService } from '../services/authServices/login.service';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private loginService:LoginService,
    private router:Router){ }

  logued:boolean = false


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.loginService.userLogued$.subscribe(user => {
              if(user?.rol.id === 1){
                this.logued = true;
                console.log('Exitoso')
              }
              else{
                this.logued = false
                console.log('Fallido')
                this.router.navigate(['auth'])
              }})
        return this.logued
}}
