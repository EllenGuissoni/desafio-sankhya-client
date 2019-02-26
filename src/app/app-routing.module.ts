import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContentComponent } from './content/content.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'content', component: ContentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
