import { Component, OnInit } from '@angular/core';
import {Film} from "../../model/film";
import {FilmsService} from "../../services/films.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-support-film',
  templateUrl: './support-film.component.html',
  styleUrls: ['./support-film.component.css']
})
export class SupportFilmComponent implements OnInit {

  filmData: Film;

  constructor(private filmsServices: FilmsService, private route: ActivatedRoute, private router: Router) {
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

  formatVideo() {
    return this.filmData.video.videoUrl.substring(+32)
  }

  onSelectPlayFilm(element: Film) {
    var idVideo = this.formatVideo()
    this.router.navigate(['/films', element.id, 'watch'], {queryParams: {"videoId": idVideo}})
  }

}
