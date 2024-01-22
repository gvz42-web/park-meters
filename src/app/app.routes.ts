import { Routes } from '@angular/router';
import {ListComponent} from "./components/list/list.component";
import {MeterComponent} from "./components/meter/meter.component";
import {meterResolver} from "./components/meter/meter.resolver";

export const routes: Routes = [
  { path: '', redirectTo: '/meters', pathMatch: 'full' },
  { path: 'meters', component: ListComponent },
  {
    path: 'meters/:id',
    component: MeterComponent,
    resolve: {
      meter: meterResolver
    } }
];
