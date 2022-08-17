import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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

  componentName?: string = 'related';
  switchButton?: boolean = true;

  constructor(private filmsServices: FilmsService, private route: ActivatedRoute, private router: Router) {
    this.filmData = {} as Film
  }

  ngOnInit(): void {
    this.getFilm()
  }
  ngOnChanges():void{
    this.getFilm()
  }

  getFilm(){
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

  changedComponentName(): void {
    if (this.switchButton == true) {
      this.componentName = 'support'
      this.switchButton = false
    } else {
      this.componentName = 'related'
      this.switchButton = true
    }
  }

}
