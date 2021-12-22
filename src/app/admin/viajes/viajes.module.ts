import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViajesRoutingModule } from './viajes-routing.module';
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ViajesRoutingModule,
    PagesModule,
  ],
  exports:[

  ]
})
export class ViajesModule { }
