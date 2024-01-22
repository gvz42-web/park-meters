import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../api.service";
import {IMeter} from "../../meter";
import {TagModule} from "primeng/tag";
import {NgIf} from "@angular/common";
import {ChipModule} from "primeng/chip";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-meter',
  standalone: true,
  imports: [
    TagModule,
    NgIf,
    ChipModule,
    ButtonModule
  ],
  templateUrl: './meter.component.html',
  styleUrl: './meter.component.sass'
})
export class MeterComponent implements OnInit{
  meter!: IMeter
  constructor(private route: ActivatedRoute, private router: Router,private api: ApiService) {

  }

  ngOnInit(): void {
    this.meter = this.route.snapshot.data['meter']
  }

  back() {
    this.router.navigate(['../'], { relativeTo: this.route })
  }

  status(status: boolean) {
    this.api.status(this.meter.id.toString(), status)
      .subscribe((meter) => this.meter = meter)
  }

  use() {
    this.api.use(this.meter.id.toString())
      .subscribe(meter => this.meter = meter)
  }
}
