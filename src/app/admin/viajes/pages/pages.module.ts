import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ViajesActivosComponent } from './viajes-activos/viajes-activos.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { PendientesComponent } from './pendientes/pendientes.component';
import { CursoComponent } from './curso/curso.component';
import { HistorialComponent } from './historial/historial.component';

@NgModule({
  declarations: [
    MainComponent,
    ViajesActivosComponent,
    PendientesComponent,
    CursoComponent,
    HistorialComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    MainComponent,
    ViajesActivosComponent,
    PendientesComponent,
    CursoComponent,
    HistorialComponent
  ]
})
export class PagesModule { }
