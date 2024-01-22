import {Component, Input} from '@angular/core';
import {CardModule} from "primeng/card";
import {IMeter} from "../../../meter";
import {TagModule} from "primeng/tag";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-meter-card',
  standalone: true,
  imports: [
    CardModule,
    TagModule,
    NgIf
  ],
  templateUrl: './meter-card.component.html',
  styleUrl: './meter-card.component.sass'
})
export class MeterCardComponent {
  @Input({ required: true }) meter!: IMeter

  constructor(private router: Router) {
  }

  openMeter() {
    this.router.navigate(['meters', this.meter.id])
  }
}
