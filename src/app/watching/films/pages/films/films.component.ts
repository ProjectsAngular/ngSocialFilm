import { Component, OnInit } from '@angular/core';
import {FilmsService} from "../../services/films.service";
import {MatTableDataSource} from "@angular/material/table";
import {Film} from "../../model/film";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

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
