import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../watching/categories/services/categories.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

}
