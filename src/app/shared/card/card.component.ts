import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data!: any
  @Input() path!: string

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onSelect(element: any) {
    this.path = '/' + this.path
    this.router.navigate([this.path, element.id])
  }
}
