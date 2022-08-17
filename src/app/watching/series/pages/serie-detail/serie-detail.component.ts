import { Component, OnInit } from '@angular/core';
import {Serie} from "../../model/serie";
import {FilmsService} from "../../../films/services/films.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {SeriesService} from "../../services/series.service";
import {Film} from "../../../films/model/film";

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

  serieData:Serie;

  componentName?: string = 'related';
  switchButton?: boolean = true;

  constructor(private seriesService: SeriesService, private route: ActivatedRoute, private router: Router) {
    this.serieData = {} as Serie
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(<string>params.get('id'));

      this.seriesService.getById(id).subscribe((response: any) => {
        console.log(response)
        this.serieData = response
      })
    });
  }

  onSelectPlayFilm(element: Film) {
    // redirect to watch all seasons and episodes
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
