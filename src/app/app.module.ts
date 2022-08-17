import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {CategoriesService} from "./watching/categories/services/categories.service";
import { HomeComponent } from './shared/home/home.component';
import { FilmsComponent } from './watching/films/pages/films/films.component';
import { CardComponent } from './shared/card/card.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { FilmDetailComponent } from './watching/films/pages/film-detail/film-detail.component';
import { ButtonComponent } from './shared/button/button.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import { FilmsRelatedComponent } from './watching/films/pages/films-related/films-related.component';
import { PlayFilmComponent } from './watching/films/pages/play-film/play-film.component';
import { SupportFilmComponent } from './watching/films/pages/support-film/support-film.component';
import { SeriesComponent } from './watching/series/pages/series/series.component';
import { SerieDetailComponent } from './watching/series/pages/serie-detail/serie-detail.component';
import { SupportSerieComponent } from './watching/series/pages/support-serie/support-serie.component';
import { SeriesRelatedComponent } from './watching/series/pages/series-related/series-related.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmsComponent,
    CardComponent,
    FilmDetailComponent,
    ButtonComponent,
    FilmsRelatedComponent,
    PlayFilmComponent,
    SupportFilmComponent,
    SeriesComponent,
    SerieDetailComponent,
    SupportSerieComponent,
    SeriesRelatedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
