import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Travel } from 'src/app/models/travels.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  @Input() allTravel:Travel[] = []
  @Input() title:string = ''
  ngOnInit(): void {
  }

  state:boolean = false
  changeState(){
    this.state = !this.state
  }


  page_size: number = 5;
  page_number:number = 1;
  pageSizeOptions: number[] = [5,10,15,20,50,100]

  handlePage(event: PageEvent){
    this.page_size = event.pageSize
    this.page_number = event.pageIndex + 1
  }
}
