import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.scss']
})
export class ListAdminComponent implements OnInit {

  constructor(private userService: UsersService) { }

  listAdmin: User[] = [];

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
        }
      }
      else {
        console.log("No contre un rol: ", this.myArr[i])
      }
    }
  }
}


