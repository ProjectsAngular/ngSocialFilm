import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../../model/film";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-play-film',
  templateUrl: './play-film.component.html',
  styleUrls: ['./play-film.component.css']
})
export class PlayFilmComponent implements OnInit {

  filmData: Film;
  safeUrl?: SafeUrl
  urlIframe?: string
  embed: string = "https://www.youtube.com/embed/"

  constructor(private _sanitizer: DomSanitizer, private route: ActivatedRoute) {
    this.filmData = {} as Film
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.urlIframe = this.embed + params['videoId'] + "?rel=0"
      console.log(this.urlIframe)
      this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.urlIframe)
      }
    )
  }


}
