import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContentComponent } from './content/content.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
    { path: 'cadastar', component: CadastrarComponent },
    { path: 'content', component: ContentComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);