import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {InputSwitchModule} from "primeng/inputswitch";
import {ButtonModule} from "primeng/button";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {IMeterInput} from "../../meter-input";
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-create-meter',
  standalone: true,
  imports: [
    DialogModule,
    InputTextModule,
    InputSwitchModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-meter.component.html',
  styleUrl: './create-meter.component.sass'
})
export class CreateMeterComponent {
  @Input() isVisible!: boolean
  @Output() isVisibleChange = new EventEmitter<boolean>()

  meterForm = new FormGroup({
    address: new FormControl('', { nonNullable: true }),
    isEnabled: new FormControl(true, { nonNullable: true })
  })

  @Output() newMeter = new EventEmitter<IMeterInput>()

  constructor(private api: ApiService) {
  }

  create() {
    this.newMeter.emit({
      address: this.meterForm.controls.address.value,
      isEnabled: this.meterForm.controls.isEnabled.value
    })
    this.meterForm.reset()
  }

  changeVisibility(value: boolean) {
    this.isVisible = value
    this.isVisibleChange.emit(this.isVisible)
  }
}
