import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./shared/home/home.component";
import {FilmsComponent} from "./watching/films/pages/films/films.component";
import {FilmDetailComponent} from "./watching/films/pages/film-detail/film-detail.component";
import {PlayFilmComponent} from "./watching/films/pages/play-film/play-film.component";
import {SupportFilmComponent} from "./watching/films/pages/support-film/support-film.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: ' home', pathMatch: 'full'},

  /**THESE PATH IS FOR FILMS**/
  {path: 'films', component: FilmsComponent},
  {path: 'films/:id', component: FilmDetailComponent},
  {path: 'films/:id/watch', component: PlayFilmComponent},
  {path:'films/:id/support', component:SupportFilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
