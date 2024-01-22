import { Component } from '@angular/core';
import {ApiService} from "../../api.service";
import {IMeter} from "../../meter";
import {MeterCardComponent} from "./meter-card/meter-card.component";
import {NgForOf} from "@angular/common";
import {SortMetersPipe} from "../../sort-meters.pipe";
import {CreateMeterComponent} from "../create-meter/create-meter.component";
import {IMeterInput} from "../../meter-input";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MeterCardComponent,
    NgForOf,
    SortMetersPipe,
    CreateMeterComponent,
    ButtonModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.sass'
})
export class ListComponent {
  meters: IMeter[] = []
  isCreateMeterOpen = false

  constructor(private api: ApiService) {
    this.api.list()
      .subscribe((meters) => this.meters = meters)
  }

  create(meter: IMeterInput) {
    this.api.create(meter)
      .subscribe((meter) => {
        this.meters.push(meter)
        this.isCreateMeterOpen = false
      })
  }
}
