import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { ColumnaComponent } from './columna/columna.component';
import { PaginatorPipe } from '../pipes/paginator.pipe';
import { PaginatorDosPipe } from './pipes/paginator-dos.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { TablaHistoryComponent } from './tabla-history/tabla-history.component';
import { ColumnaHistoryComponent } from './columna-history/columna-history.component';
import { StatusTravelTraductorPipe } from './pipes/status-travel-traductor.pipe';

@NgModule({
  declarations: [
    TableComponent,
    ColumnaComponent,
    PaginatorDosPipe,
    TablaHistoryComponent,
    ColumnaHistoryComponent,
    StatusTravelTraductorPipe
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    ReactiveFormsModule
  ],
  exports: [
    TableComponent,
    ColumnaComponent,
    TablaHistoryComponent,
    ColumnaHistoryComponent
  ]
})
export class ComponentsModule { }
