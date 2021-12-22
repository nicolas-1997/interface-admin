import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
  
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PagesModule
  ]
})
export class AuthModule { }
