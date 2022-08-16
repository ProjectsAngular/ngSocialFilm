import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../../watching/films/model/film";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data!: Film

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  onSelectFilm(element:Film){
    this.router.navigate(['/films', element.id])
  }
}
