import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Travel } from 'src/app/models/travels.model';

@Component({
  selector: 'app-tabla-history',
  templateUrl: './tabla-history.component.html',
  styleUrls: ['./tabla-history.component.scss']
})
export class TablaHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() allTravel:Travel[] = []
  @Input() title:string = ''


  page_size: number = 5;
  page_number:number = 1;
  pageSizeOptions: number[] = [5,10,15,20,50,100]

  handlePage(event: PageEvent){
    this.page_size = event.pageSize
    this.page_number = event.pageIndex + 1
  }
}
