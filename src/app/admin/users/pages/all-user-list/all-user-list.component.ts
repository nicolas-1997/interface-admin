import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-all-user-list',
  templateUrl: './all-user-list.component.html',
  styleUrls: ['./all-user-list.component.scss']
})
export class AllUserListComponent implements OnInit {

  constructor(private userService: UsersService) { }

  allUserList:User[] = []

  ngOnInit(): void {
    this.userService.getAllUser();
    this.userService.allUsers$.subscribe(listUser => this.allUserList.push(...listUser))
  }



  imp(){
    console.log(this.allUserList)
  }
}
