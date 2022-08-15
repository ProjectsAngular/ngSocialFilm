import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Film} from "../../model/film";
import {FilmsService} from "../../services/films.service";

@Component({
  selector: 'app-films-related',
  templateUrl: './films-related.component.html',
  styleUrls: ['./films-related.component.css']
})
export class FilmsRelatedComponent implements OnInit {

  dataSource: MatTableDataSource<Film>;

  constructor(private filmsServices:FilmsService) {
    this.dataSource = new MatTableDataSource<Film>();
  }

  ngOnInit(): void {
    this.filmsServices.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(response);
    });
  }

}
