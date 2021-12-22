import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  sidebarState:boolean = false

  sidebar(){
    this.sidebarState = !this.sidebarState
  }

  menuState:boolean = false;

  changeStateMenu(){
    this.menuState = !this.menuState
  }
  cerrarSesion(){
    localStorage.clear();
    this.router.navigate([''])
  }
}
