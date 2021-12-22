import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mostrarViajes:boolean = false;
  mostrarUsuario:boolean = false;


  changeState(){
    this. mostrarViajes = !this. mostrarViajes
  }
  changeStateUsuarios(){
    this. mostrarUsuario = !this. mostrarUsuario
  }
}
