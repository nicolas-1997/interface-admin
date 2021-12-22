import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { Vehicle } from '../../../../models/user.model';
@Component({
  selector: 'app-user-column',
  templateUrl: './user-column.component.html',
  styleUrls: ['./user-column.component.scss']
})
export class UserColumnComponent implements OnInit {

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
  }
  editState:boolean = false

  changeState(){
    this.editState = !this.editState
  }
  @Input() id:number = 0
  @Input() fullName:string = '';
  @Input() rol: string = '';
  @Input() address:string = '';
  @Input() cellPhone:number = 0;
  @Input() email:string = '';
  @Input() vehicle:string = '';
  @Input() isAccepted:boolean = false
  @Input() isDeleted:boolean = false
  @Input() observations:string = ''
  @Input() password:string = ''
  @Input() vahicleIsDeleted:number = 0
  @Input() rolID:number = 0
  @Input() rolName:string = '';
  @Input() rolisDeleted:number = 0



  editUser(){
    // this.fullName = this.fullName
    // this.email = this.email
    let cellPhone:string = this.cellPhone.toString()
    this.userService.editUser(this.id, this.email,this.fullName, this.address, cellPhone ,this.isAccepted,this.isDeleted,
                              this.observations,this.password, this.vehicle,this.vahicleIsDeleted,this.rolID ,this.rolName, this.rolisDeleted).subscribe(
                                resp => console.log(resp)
                              )
  }
}
