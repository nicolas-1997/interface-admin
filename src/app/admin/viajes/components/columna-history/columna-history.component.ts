import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-columna-history',
  templateUrl: './columna-history.component.html',
  styleUrls: ['./columna-history.component.scss']
})
export class ColumnaHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() cadete:string = '';
  @Input() cliente:string = '';
  @Input() fecha:string = '';
  @Input() hora:string = '';
  @Input() statusTravel:string = '';


}
