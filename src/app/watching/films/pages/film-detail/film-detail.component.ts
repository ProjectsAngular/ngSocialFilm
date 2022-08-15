import { Component, OnInit } from '@angular/core';
import {FilmsService} from "../../services/films.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Film} from "../../model/film";
import {Video} from "../../../videos/model/video";
import {SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  filmData: Film;
  urlVideo?:SafeUrl

  constructor(private filmsServices:FilmsService, private route: ActivatedRoute,private router:Router) {
    this.filmData = {} as Film
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(<string>params.get('id'));

      this.filmsServices.getById(id).subscribe((response: any) => {
        console.log(response)
        this.filmData = response
      })
    });
  }

  onSelectPlayFilm(element:Film){
    this.router.navigate(['/films', element.id,'watch'])
  }
}
