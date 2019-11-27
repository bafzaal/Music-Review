import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenHomepage } from './open-homepage/open-homepage.component';
import { OpenSongListComponent } from './open-song-list/open-song-list.component';


const routes: Routes = [
  {path: '',   redirectTo: '/api/open', pathMatch: 'full'},
  {path: 'api/open', component: OpenHomepage},
  {path: 'api/open/song', component: OpenSongListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [OpenHomepage, OpenSongListComponent]
