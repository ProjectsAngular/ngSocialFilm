import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Film} from "../../../films/model/film";
import {FilmsService} from "../../../films/services/films.service";
import {Serie} from "../../model/serie";
import {SeriesService} from "../../services/series.service";

@Component({
  selector: 'app-support-serie',
  templateUrl: './support-serie.component.html',
  styleUrls: ['./support-serie.component.css']
})
export class SupportSerieComponent implements OnInit {

  dataSource: MatTableDataSource<Serie>;

  constructor(private seriesService:SeriesService) {
    this.dataSource = new MatTableDataSource<Serie>();
  }

  ngOnInit(): void {
    this.seriesService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(response);
    });
  }
}
