import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../../watching/films/model/film";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data!: Film
  urlVideo?:SafeUrl
  idVideo?: string
  embed: string = "https://www.youtube.com/embed/"

  constructor(private _sanitizer:DomSanitizer) {
  }

  ngOnInit(): void {
    this.urlVideo = this._sanitizer.bypassSecurityTrustResourceUrl(this.formatVideo())
  }

  formatVideo() {
    var url = this.data.video.videoUrl
    this.idVideo = url.substring(+32)
    var result = this.embed + this.idVideo +"?rel=0"
    console.log(result)
    return result
  }
}
