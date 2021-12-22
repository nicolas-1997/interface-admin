import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.scss']
})
export class ListClienteComponent implements OnInit {

  constructor(private userService: UsersService) { }

  listCliente: User[] = [];

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
          if (this.myArr[i].rol.id === 3) {
            this.listCliente.push(this.myArr[i])
          }
        }
      }
      else {
        console.log("No contre un rol: ", this.myArr[i])
      }
    }
  }
}
