import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { PagesModule } from '../pages/pages.module';
import { UserTableComponent } from './components-users/user-table/user-table.component';
import { HomeComponent } from './pages/home/home.component';
import { AllUserListComponent } from './pages/all-user-list/all-user-list.component';
import { UserColumnComponent } from './components-users/user-column/user-column.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { PaginatorUserPipe } from './pipes/paginator-user.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ListAdminComponent } from './pages/list-admin/list-admin.component';
import { ListClienteComponent } from './pages/list-cliente/list-cliente.component';
import { ListCadeteComponent } from './pages/list-cadete/list-cadete.component';
import { RegisterComponent } from './components-users/register/register.component';
import { RegisterAdminComponent } from './pages/register-admin/register-admin.component'
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterCadeteComponent } from './pages/register-cadete/register-cadete.component';
@NgModule({
  declarations: [
    UserTableComponent,
    HomeComponent,
    AllUserListComponent,
    UserColumnComponent,
    PaginatorUserPipe,
    FilterPipe,
    ListAdminComponent,
    ListClienteComponent,
    ListCadeteComponent,
    RegisterComponent,
    RegisterAdminComponent,
    RegisterCadeteComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    PagesModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    UserTableComponent
  ]
})
export class UsersModule { }
