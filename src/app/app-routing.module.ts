import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancasComponent } from './financas/financas.component';

const routes: Routes = [
  { path: '', redirectTo: '/financas', pathMatch: 'full' },
  { path: 'financas', component: FinancasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
