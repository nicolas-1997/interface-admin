import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UsersService) { }

  listAdmin: User[] = [];
  listCadete: User[] = [];
  listClientes: User[] = [];


  myArr: User[] = [];



  ngOnInit(): void {
    this.userService.getAllUser();
    this.userService.allUsers$.subscribe(resp => {
      this.myArr.push(...resp)
      this.filtro();
    })
  }


  filtro() {
    for (let i = 0; i <= this.myArr.length; i++) {
      if (this.myArr[i]) {
        if (this.myArr[i].rol) {
          if (this.myArr[i].rol.id === 1) {
            this.listAdmin.push(this.myArr[i])
          }
          else if (this.myArr[i].rol.id === 2) {
            this.listCadete.push(this.myArr[i])
            console.log(this.listCadete)
          }
          else {
            this.listClientes.push(this.myArr[i])
          }
        }
      }
      else {
        console.log("No contre un rol: ", this.myArr[i])
      }
    }
  }

}
