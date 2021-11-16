import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { ListarLembretesComponent } from './listar-lembretes/listar-lembretes.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  {path: '', component: TabsComponent},
  {path: 'lembrete/editar/:id', component: EditarComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
