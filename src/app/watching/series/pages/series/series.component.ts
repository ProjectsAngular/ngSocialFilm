import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Film} from "../../../films/model/film";
import {FilmsService} from "../../../films/services/films.service";
import {Serie} from "../../model/serie";
import {SeriesService} from "../../services/series.service";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  dataSource: MatTableDataSource<Serie>;

  constructor(private seriesServices:SeriesService) {
    this.dataSource = new MatTableDataSource<Serie>();
  }

  ngOnInit(): void {
    this.seriesServices.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(response);
    });
  }
}
