import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./shared/home/home.component";
import {FilmsComponent} from "./watching/films/pages/films/films.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: ' home', pathMatch: 'full' },
  { path: 'films', component: FilmsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
