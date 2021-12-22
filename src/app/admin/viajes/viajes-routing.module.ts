import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { PendientesComponent } from './pages/pendientes/pendientes.component';
import { ViajesActivosComponent } from './pages/viajes-activos/viajes-activos.component';
import { CursoComponent } from './pages/curso/curso.component';
import { HistorialComponent } from './pages/historial/historial.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'activos',
    component: ViajesActivosComponent
  },
  {
    path: 'pendientes',
    component: PendientesComponent
  },
  {
    path: 'en-curso',
    component: CursoComponent
  },
  {
    path: 'history',
    component: HistorialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViajesRoutingModule { }
