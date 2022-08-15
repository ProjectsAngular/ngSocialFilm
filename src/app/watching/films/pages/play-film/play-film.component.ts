import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../../model/film";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-play-film',
  templateUrl: './play-film.component.html',
  styleUrls: ['./play-film.component.css']
})
export class PlayFilmComponent implements OnInit {

  @Input() data!: Film
  urlVideo?:SafeUrl
  idVideo?: string
  embed: string = "https://www.youtube.com/embed/"

  constructor(private _sanitizer:DomSanitizer) {
    this.data = {} as Film
  }
  ngOnInit(): void {
    this.urlVideo = this._sanitizer.bypassSecurityTrustResourceUrl(this.formatVideo())
  }

  formatVideo() {
    var url = this.data.video.videoUrl
    console.log(url)
    this.idVideo = url.substring(+32)
    var result = this.embed + this.idVideo + "?rel=0"
    var temp = this.embed + "gNAdnYTcgUo&t" + "?rel=0"
    console.log(result)
    return result
  }
}
