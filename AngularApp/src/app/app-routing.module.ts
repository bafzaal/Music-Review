import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenHomepage } from './open-homepage/open-homepage.component';


const routes: Routes = [
  {path: '',   redirectTo: '/api/open', pathMatch: 'full'},
  {path: 'api/open', component: OpenHomepage},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [OpenHomepage]
