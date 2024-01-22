import { Component } from '@angular/core';
import {ApiService} from "../../api.service";
import {IMeter} from "../../meter";
import {MeterCardComponent} from "./meter-card/meter-card.component";
import {NgForOf} from "@angular/common";
import {SortMetersPipe} from "../../sort-meters.pipe";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MeterCardComponent,
    NgForOf,
    SortMetersPipe
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass'
})
export class ListComponent {
  meters: IMeter[] = []

  constructor(private api: ApiService) {
    this.api.list()
      .subscribe((meters) => this.meters = meters)
  }
}
