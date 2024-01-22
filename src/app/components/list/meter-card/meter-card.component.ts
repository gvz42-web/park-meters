import {Component, Input} from '@angular/core';
import {CardModule} from "primeng/card";
import {IMeter} from "../../../meter";
import {TagModule} from "primeng/tag";
import {NgIf} from "@angular/common";

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
}
