import {Component, Input} from '@angular/core';
import {CardModule} from "primeng/card";
import {TagModule} from "primeng/tag";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {IMeterShort} from "../../../meter-short";

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
  @Input({ required: true }) meter!: IMeterShort

  constructor(private router: Router) {
  }

  openMeter() {
    this.router.navigate(['meters', this.meter.id])
  }
}
