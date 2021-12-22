import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  constructor() { }

  @Input() allUser:User[] = []
  @Input() title:string = ''
  ngOnInit(): void {
  }


  page_size: number = 5;
  page_number:number = 1;
  pageSizeOptions: number[] = [5,10,15,20,50,100]

  filterUser:string = ' '

  handlePage(event: PageEvent){
    this.page_size = event.pageSize
    this.page_number = event.pageIndex + 1
  }
}
