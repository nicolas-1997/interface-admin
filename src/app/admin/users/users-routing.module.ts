import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUserListComponent } from './pages/all-user-list/all-user-list.component';
import { HomeComponent } from './pages/home/home.component';
import { ListAdminComponent } from './pages/list-admin/list-admin.component';
import { ListCadeteComponent } from './pages/list-cadete/list-cadete.component';
import { ListClienteComponent } from './pages/list-cliente/list-cliente.component';
import { RegisterAdminComponent } from './pages/register-admin/register-admin.component';
import { RegisterCadeteComponent } from './pages/register-cadete/register-cadete.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home-user'
  },
  {
    path: 'home-user',
    component: HomeComponent
  },
  {
    path: 'all-user',
    component: AllUserListComponent
  },
  {
    path: 'admin-list',
    component: ListAdminComponent
  },
  {
    path: 'cliente-list',
    component: ListClienteComponent
  },
  {
    path: 'cadete-list',
    component: ListCadeteComponent
  },
  {
    path: 'register-admin',
    component: RegisterAdminComponent
  },
  {
    path: 'register-cadete',
    component: RegisterCadeteComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
