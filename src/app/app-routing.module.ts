import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component'
import { AsteroidComponent } from './asteroid/asteroid.component'
import {NotFoundComponent} from "./404/404.component";

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'details/:id', component: AsteroidComponent },
  { path: 'notFound', component: NotFoundComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

