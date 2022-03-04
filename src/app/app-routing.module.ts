import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MascotaComponent } from './components/mascota/mascota.component';
import { EditarmascotasComponent } from './components/editarmascotas/editarmascotas.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'mascotas', pathMatch: 'full'
  },
  {
    path: 'mascotas', component: MascotaComponent
  },
  {
    path: 'crearmascota', component: EditarmascotasComponent
  },
  {
    path: 'editarmascota/:id', component: EditarmascotasComponent
  },
  {
    path: "**", redirectTo: 'mascotas', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
